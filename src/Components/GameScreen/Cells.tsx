import * as React from 'react';
import styled from 'styled-components/native';

/*
 *         height: 5%;
 width: 6.25%;
 * */
const colors = (props) => {
    switch (props.color) {
        case 1:
            return 'red';
        case 2:
            return 'blue';
        case 3:
            return 'yellow';
        case 4:
            return '#add8e6';
        case 5:
            return '#d9534f';
        default:
            return 'white';
    }
};

export const SingleCellStyled = (styled.View as any)`
        height: 14;
        width: 10%;
        border-style: solid;
        border-width: 1;
        border-color: black;
        background-color: ${props => colors }
`;

const CompleteRowStyled = styled.View`
        flex-direction: row;
        height: 14;
        width: 100%;
`;

export const createViewGrid = (grid: number[][]): any [] => {
    // should be 16?
    const verticalSquares = grid.length;
    const temporaryGrid: any[] = [];
    for (let verticalIndex = 0; verticalIndex < verticalSquares; verticalIndex++) {
        const row: any [] = [];
        // should be 10
        const horizontalSquares = grid[verticalIndex].length;
        for (let horizontalRowsMade = 0; horizontalRowsMade < horizontalSquares; horizontalRowsMade++) {
            // TODO: should generate the block color

            //const active = grid[verticalIndex][horizontalRowsMade] === 1;

            const active: number = grid[verticalIndex][horizontalRowsMade] !== 0 ? grid[verticalIndex][horizontalRowsMade] : 0;

            const cell = (<SingleCellStyled key={ ('' + verticalIndex + horizontalRowsMade) } colors={ active }/>);
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

