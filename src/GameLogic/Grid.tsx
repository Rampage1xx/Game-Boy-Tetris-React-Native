import {fill} from 'lodash';
import * as React from 'react';
import 'react-native';
import {BlocksArray} from './Blocks';

export const makeDataGrid = () => {
    const horizontalSquares = 10;
    const verticalSquares = 16;
    const temporaryGrid: any[] = [];
    for (let verticalIndex = 0; verticalIndex < verticalSquares; verticalIndex++) {
        const row: any [] = [];
        for (let horizontalRowsMade = 0; horizontalRowsMade < horizontalSquares; horizontalRowsMade++) {
            row.push(0);
        }

        temporaryGrid.push(row);
    }

    return temporaryGrid;
};

export const generateBlocksQueue = () => {
    return BlocksArray[Math.floor(Math.random() * BlocksArray.length)];

};

export const changeGridStatus: IChangeGridStatus = (parameters) => {
    const {dataGridState, block, blockPositionVertical, blockPositionHorizontal} = parameters;
    const horizontalGridLength = 10;
    const temporaryGrid = dataGridState;
    const error = 'Illegal movement';

    for (let i = 0; i < block.length; i++) {
        // picks a row of the block
        const blockRow = block[i];
        // gets higher as the rows of the block go up
        const verticalGridRow = blockPositionVertical - i;
        // space occupied by the block
        const totalOccupiedSpace = (blockPositionHorizontal + block[i].length);

        if (verticalGridRow < 0) {
            // irrelevant movement
            break;
        } else if (totalOccupiedSpace > horizontalGridLength) {
            // illegal movement
            throw error;
            // return {temporaryGrid: dataGridState, completed: false};
        }

        const zeros = blockRow.filter(blockNumbers => blockNumbers === 0);
        // zeroes are only relevant to the starting  horizontal offset position.
        const correctedPosition = blockPositionHorizontal + zeros.length;
        // the number to slice should be only those affected by the blocks presence (represented by number one)
        const endSlice = blockPositionHorizontal + blockRow.length - zeros.length;
        //const gridToFill = blockPositionHorizontal + blockRow.length - zeroes.length;

        // blockPositionHorizontal
        const resultRow = temporaryGrid[verticalGridRow]
            .slice(correctedPosition, (correctedPosition + endSlice));

        const searchResult = resultRow.indexOf(1);

        if (searchResult !== -1) return {data: {dataGridState}, locked: true};

        fill(temporaryGrid[verticalGridRow], 1, correctedPosition, endSlice);

    }

    return {
        completed: true,
        data: {
            dataGridState: temporaryGrid,
            blockPositionVertical: blockPositionVertical + 1,
            blockPositionHorizontal,
            block
        }
    };
};
