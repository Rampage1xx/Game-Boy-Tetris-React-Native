import * as React from 'react';

export const makeDataGrid = (): any[][] => {
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

