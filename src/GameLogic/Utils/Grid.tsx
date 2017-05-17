import {cloneDeep, fill} from 'lodash';
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

const changeGrid: IChangeGridStatus = (parameters) => {
    const {dataGridState, block, blockPositionVertical, blockPositionHorizontal} = parameters;
};
