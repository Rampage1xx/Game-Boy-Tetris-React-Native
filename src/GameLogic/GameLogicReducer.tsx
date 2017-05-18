import {List, Map} from 'immutable';
import {CURRENT_BLOCK, MOVING_BLOCK, REMOVE_QUEUE_PIECE, RENDER_GRID, UPDATE_QUEUE} from './Actions';
import {makeDataGrid} from './CoreLogic/Grid';

declare type IGameLogicDefaultState = Map<string, any[] | List<any> | Map<string, any[] | Map<string, {}>>>;

const GameLogicDefaultState: IGameLogicDefaultState = Map({
    dataGridState: makeDataGrid(),
    queuedBlocks: List([]),
    //  staticBlocksGrid: makeDataGrid(),
    gridBlockData: Map({
        blockCombinations: [],
        data: Map({})
    }),
    currentBlock: List([])
});

export const GameLogicReducer = (state = GameLogicDefaultState, action?: IGameLogicActions) => {
    console.log(action.type);

    switch (action.type) {

        case RENDER_GRID:
            return state.set('dataGridState', action.dataGridState);

        case CURRENT_BLOCK:
            return state.set('currentBlock', action.block);

        case UPDATE_QUEUE:
            return state
                .update('queuedBlocks', ((list: List<any>) =>
                    list.push(action.blockToAdd)));

        case REMOVE_QUEUE_PIECE:
            return state
                .update('queuedBlocks', ((list: List<any>) =>
                    list.delete(action.blockToRemove)));

        case MOVING_BLOCK:
            return state
                .setIn(['gridBlockData', 'data'], action.data);
        default:
            return state;
    }

};

