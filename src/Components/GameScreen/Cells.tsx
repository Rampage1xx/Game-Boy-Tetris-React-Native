import * as React from 'react';
import styled from 'styled-components/native';

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


