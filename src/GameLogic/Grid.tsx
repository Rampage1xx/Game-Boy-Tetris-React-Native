import * as React from 'react';
import 'react-native';
import styled from 'styled-components/native';
import any = jasmine.any;

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

export const funzioneCheBlocca = (state) => {

};

export const changeGridStatus: IChaneGridStatus = ({dataGrid, blockMasterArray, blockPositionVertical, offset}) => {
    const loop = true;
    const state = dataGrid;

    generateData: while (loop) {
        blockMasterArray.forEach((blockSubArray, arrayIndex) => {
            blockSubArray.forEach((blockNumber: number, blockIndex) => {

                state[blockPositionVertical + arrayIndex - 1].forEach((numberExtracted, indexNumber) => {
                    if (indexNumber >= (offset + blockIndex - 1)) {

                        if (numberExtracted === 1 && blockNumber === 1) {
                            funzioneCheBlocca(dataGrid);

                            break generateData;
                        } else if (blockNumber === 1) {
                            state[blockPositionVertical + arrayIndex - 1][indexNumber] = blockNumber;
                        }

                    }
                });

            });
        });

        return state;
    }
};

