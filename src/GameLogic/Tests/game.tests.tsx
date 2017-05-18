import {Map} from 'immutable';
import * as React from 'react';
import {store} from '../../Store/Reducers';
import {actionON, actionStart} from '../Actions';
import {L} from '../CoreLogic/Blocks';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
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
    /*
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

     it('should generate  the blocks and pick one from the group', () => {
     generateBlocksQueue(4);
     const blocks: List<any> = storeGetState().getIn(['GameLogicReducer', 'queuedBlocks']);
     expect(blocks).toBeTruthy();
     expect(blocks.get(0)).toBeTruthy();

     });

     it('should modify the blank data grid', () => {

     });

     it('should not allow an illegal movement', () => {

     });
     */

    /*
     it('should update the store', () => {
     store.dispatch(actionRenderGrid(expectedDataWithBlock.dataGridState));
     expect(getGridState())
     .toEqual(expectedDataWithBlock.dataGridState);
     });
     */

    it('should start', async (done) => {
        store.dispatch(actionON());
        store.dispatch(actionStart());
        store.dispatch(actionStart());
        await sleep(2000);
        done();
    });

});
