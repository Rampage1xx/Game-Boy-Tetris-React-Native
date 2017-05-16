import * as React from 'react';
import 'react-native';
import styled from 'styled-components/native';
import {fill} from 'lodash';

const SingleCellStyled = styled.View`
        height: 5%;
        width: 6.25%
`;

const CompleteRowStyled = styled.View`
        flex-direction: row;
`;

export const createGrid = (): any [] => {
    const horizontalSquares = 10;
    const verticalSquares = 16;
    const temporaryGrid: any[] = [];
    for (let verticalIndex = 0; verticalIndex < verticalSquares; verticalIndex++) {
        const row: any [] = [];
        for (let horizontalRowsMade = 0; horizontalRowsMade < horizontalSquares; horizontalRowsMade++) {
            const cell = (<SingleCellStyled key={ ('' + verticalIndex + horizontalRowsMade)  }/>);
            row.push(cell);
        }
        const CompleteRow = (
            <CompleteRowStyled key={ verticalIndex }>
                { row }
            </CompleteRowStyled>
        );
        temporaryGrid.push(CompleteRow);
    }

    return temporaryGrid;
};

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

export const changeGridStatus: IChangeGridStatus = (parameters) => {
    const {dataGridState, blockMasterArray, blockPositionVertical, blockPositionHorizontal} = parameters;
    const horizontalGridLength = 10;
    const temporaryGrid = dataGridState;

    for (let i = 0; i < blockMasterArray.length; i++) {
        const blockRow = blockMasterArray[i];
        const verticalGridRow = blockPositionVertical - i;
        const totalOccupiedSpace = (blockPositionHorizontal + blockMasterArray[i].length);

        if (verticalGridRow < 0) {
            // irrelevant movement
            break;
        } else if (totalOccupiedSpace > horizontalGridLength) {
            // illegal movement
            return {temporaryGrid: dataGridState, completed: false};
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

        if (searchResult !== -1) return {dataGridState, completed: false};

        fill(temporaryGrid[verticalGridRow], 1, correctedPosition, endSlice);

    }

    return {temporaryGrid, completed: true};
};
