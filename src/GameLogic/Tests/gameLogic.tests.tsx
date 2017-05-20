import {Map} from 'immutable';
import * as React from 'react';
import {store} from '../../Store/Reducers';
import {actionMovingBlock, actionON, actionStart} from '../Actions';
import {L, Z} from '../CoreLogic/BlocksAttributes';
import {allZeroes, changeGridStatus} from '../CoreLogic/GridLogic';

const sleep = (ms) => new Promise(r => setTimeout(r, ms));
const getGameLogicState = (value: string) => (store.getState() as Map<string, any>)
    .get('GameLogicReducer').get(value);
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
declare let window;

describe('testing logic functions', () => {
    /*
     it('should generate a view grid', () => {
     const grid = createViewGrid();
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

    it('should complete a game round', async () => {
        store.dispatch(actionON());
        store.dispatch(actionStart());
        expect(getGameLogicState('gameOver')).toBe(true);

    });

    it('should apply the filtering function to the numbers', () => {
        const collection = [0, 0, 0];
        const collection2 = [1, 0, 1];

        const result = collection.every(value => allZeroes(value));
        const result2 = collection2.every(value => allZeroes(value));

        expect(result).toBe(true);
        expect(result2).toBe(false);
    });

    it('should render the z', () => {

        store.dispatch(actionMovingBlock({
            block: Z[0],
            downKey: false,
            dataGridState: baseDataGrid,
            blockPositionVertical: 2,
            lockedBlocks: baseDataGrid,
            blockPositionHorizontal: 5,
            blockColor: Z[5],
            blockLength: Z[4][0]
        }));

        const parametersToSend = {horizontal: 0, vertical: 0, locked: false, downKey: false};
        const results = changeGridStatus(parametersToSend);
        expect(results.data.dataGridState[1][5]).toBe(5);

    });

});
