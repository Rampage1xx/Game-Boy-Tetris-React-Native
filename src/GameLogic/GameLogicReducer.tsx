import {List, Map} from 'immutable';
import {CURRENT_BLOCK, GAME_OVER, MOVING_BLOCK, REMOVE_QUEUE_PIECE, RENDER_GRID, UPDATE_QUEUE} from './Actions';
import {makeDataGrid} from './CoreLogic/MakeDataGrid';

declare type IGameLogicDefaultState = Map<string, boolean | any[] | List<any> | Map<string, any[] | Map<string, {}>>>;

const GameLogicDefaultState: IGameLogicDefaultState = Map({
    dataGridState: makeDataGrid(),
    queuedBlocks: List([]),
    gameOver: false,
    gridBlockData: Map({
        blockCombinations: [],
        data: Map({})
    }),
    currentBlock: List([])
});

export const GameLogicReducer = (state = GameLogicDefaultState, action?: IGameLogicActions) => {

    //console.log(action.type, state.getIn(['gridBlockData', 'data']));

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
        case GAME_OVER:
            return state
                .set('gameOver', action.gameOver);
        default:
            return state;
    }

};

