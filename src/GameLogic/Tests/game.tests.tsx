import {shallow} from 'enzyme';
import {Map} from 'immutable';
import {cloneDeep} from 'lodash';
import * as React from 'react';
import {View} from 'react-native';
import {createGrid} from '../../Components/GameScreen/Cells';
import {store} from '../../Store/Reducers';
import {actionMovingBlock, actionRenderGrid} from '../Actions';
import {L} from '../CoreLogic/Blocks';
import {makeDataGrid} from '../CoreLogic/Grid';
import {changeGridStatusTry} from '../CoreLogic/BlockMovement';

const getGridState = () => (store.getState() as Map<string, any>).get('GameLogicReducer').get('dataGridState');
let baseDataGrid: number[][];
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
        block: L[0],
        lockedBlocks: baseDataGrid
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

    it('should fill a row', () => {
        const temporaryGrid = cloneDeep(baseDataGrid);
        temporaryGrid[15].fill(1, 0, 2);
        // expect(temporaryGrid).toEqual(baseDataGrid);
    });

    it('should modify the blank data grid', () => {


    });

    it('should not allow an illegal movement', () => {

    });

    it('should update the store', () => {
        store.dispatch(actionRenderGrid(expectedDataWithBlock.dataGridState));
        expect(getGridState())
            .toEqual(expectedDataWithBlock.dataGridState);
    });



    it('should move a block', () => {
        const dataToSend = {
            block: L[0],
            dataGridState: baseDataGrid,
            blockPositionVertical: 1,
            type: '',
            blockPositionHorizontal: 5,
            lockedBlocks: baseDataGrid,
            downKey: false
        };
        store.dispatch(actionMovingBlock(dataToSend));
        const result = changeGridStatusTry({downKey: false, vertical: 0, locked: false, horizontal: 0 });
        store.dispatch(actionMovingBlock(result.data));
        const storeRes = (store.getState() as Map<string, Map<string, any>>).getIn(['GameLogicReducer', 'gridBlockData', 'data']);
        console.log(storeRes)
    })

});
