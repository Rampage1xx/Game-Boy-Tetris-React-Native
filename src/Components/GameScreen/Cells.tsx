import * as React from 'react';
import styled from 'styled-components/native';
import {ThemedStyledProps} from 'styled-components';
import {ViewProperties} from 'react-native';



const SingleCellStyled = (styled.View as any)`
        height: 5%;
        width: 6.25%;
        background-color: ${props => props.active ? 'dark' : ''}
`;

const CompleteRowStyled = styled.View`
        flex-direction: row;
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
            const css = grid[verticalIndex][horizontalRowsMade] === 1 ? 'active' : ''
            const cell = (<SingleCellStyled key={ ('' + verticalIndex + horizontalRowsMade) }  />);
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

