import {List, Map} from 'immutable';
import {REMOVE_QUEUE_PIECE, RENDER_GRID, UPDATE_QUEUE} from './Actions';
import {makeDataGrid} from './Grid';

const GameLogicDefaultState = Map({
    dataGridState: makeDataGrid(),
    queuedBlocks: List([])
});

export const GameLogicStore = (state = GameLogicDefaultState, action?) => {

        switch (action.type) {

            case RENDER_GRID:
                return state.set('dataGridState', action.dataGridState);
            case UPDATE_QUEUE:
                return state
                    .update('queuedBlocks', ((list: List<any>) =>
                        list.concat(action.blocksToMake)));
            case REMOVE_QUEUE_PIECE:
                return state
                    .update('queuedBlocks', ((list: List<any>) =>
                        list.delete(action.blockToRemove)));
            default:
                return state;
        }

    };


