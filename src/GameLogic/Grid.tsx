import 'react-native';
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
    for (const horizontalIndex = 0; horizontalIndex < verticalSquares; horizontalIndex++) {
        const row: any [] = [];
        for (const horizontalRowsMade = 0; horizontalRowsMade < horizontalSquares; horizontalRowsMade++) {
            const cell = (<SingleCellStyled key={ (horizontalRowsMade + horizontalIndex)  }/>);
            row.push(cell);
        }
        const CompleteRow = (
            <CompleteRowStyled>
                { row }
            </CompleteRowStyled>
        );
        temporaryGrid.push(CompleteRow);
    }

    return temporaryGrid;
};
