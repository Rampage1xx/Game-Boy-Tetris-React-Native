import {View} from 'react-native';
import * as React from 'react';
import {shallow} from 'enzyme';

import {changeGridStatus, makeDataGrid} from './Grid';
import {L} from './Blocks';
import {createGrid} from '../Components/GameScreen/Cells';
import {store} from '../Store/Reducers';
import {actionMovingBlock, actionRenderGrid} from './Actions';

let baseDataGrid;
let parameters: IChangeGridStatusParameters;
beforeEach(() => {
    baseDataGrid = [
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
    parameters = {
        dataGridState: baseDataGrid,
        blockPositionHorizontal: 7,
        blockPositionVertical: 5,
        block: L[0]
    };
});
const expectedDataWithBlock = {
    completed: true,
    dataGridState: [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
};

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

        const result = changeGridStatus(parameters);
        expect(result.data.dataGridState).toEqual(expectedDataWithBlock.dataGridState);

    });

    it('should not allow an illegal movement', () => {
        // const expectedData = expectedDataWithBlock;
        // expectedData.completed = false;
        const parameters2: IChangeGridStatusParameters = {
            dataGridState: baseDataGrid,
            blockPositionHorizontal: 9,
            blockPositionVertical: 5,
            block: L[0]
        };

        expect(() => changeGridStatus(parameters2)).toThrow();
    });

    it('should update the store', () => {
        const storeResults = store.dispatch(actionRenderGrid(expectedDataWithBlock.dataGridState));
        expect((store.getState() as Map<string, any>).get('GameLogicReducer').get('dataGridState'))
            .toEqual(expectedDataWithBlock.dataGridState);

    });

    it('should move a step forward the block', () => {

        const sagaParameters = {
            block: L[0],
            dataGridState: baseDataGrid,
            blockPositionVertical: 5,
            type: '',
            blockPositionHorizontal: 15
        };
        store.dispatch(actionMovingBlock(sagaParameters));
    });

});
