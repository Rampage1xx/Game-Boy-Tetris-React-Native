import {View} from 'react-native';
import * as React from 'react';
import {shallow} from 'enzyme';

import {changeGridStatus, createGrid, makeDataGrid} from './Grid';
import {L} from './Blocks';

const baseDataGrid = [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

const expectedDataWithBlock =    { temporaryGrid:
    [ [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 1, 1, 1 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
        [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] ],
    completed: true }
describe('testing logic functions', () => {
    it('should generate a view grid', () => {
        const grid = createGrid();
        const shallowGrid = shallow(<View>{ grid }</View>);
        expect(shallowGrid.children()).toHaveLength(16);
    });

    it('should generate a  blank data grid', () => {
        const gridData = makeDataGrid();
        expect(gridData).toEqual(baseDataGrid);
    });

    it('should modify the blank data grid', () => {
        const parameters: IChangeGridStatusParameters = {
            dataGridState: baseDataGrid,
            blockPositionHorizontal: 7,
            blockPositionVertical: 5,
            blockMasterArray: L[0]
        };

        const result = changeGridStatus(parameters);
        expect(result).toEqual(expectedDataWithBlock);
    });

    it('should not allow an illegal movement', () => {
        const expectedData = expectedDataWithBlock;
        expectedData.completed = false;
        console.log(expectedData)
        const parameters: IChangeGridStatusParameters = {
            dataGridState: baseDataGrid,
            blockPositionHorizontal: 9,
            blockPositionVertical: 5,
            blockMasterArray: L[0]
        };
        const result = changeGridStatus(parameters);
        expect(result).toEqual(expectedData);
    })
});
