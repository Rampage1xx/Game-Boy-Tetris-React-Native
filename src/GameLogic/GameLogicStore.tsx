import {List, Map} from 'immutable';
import {REMOVE_QUEUE_PIECE, RENDER_GRID, STATIC_BLOCKS, UPDATE_QUEUE} from './Actions';
import {makeDataGrid} from './CoreLogic/Grid';

const GameLogicDefaultState = Map({
    dataGridState: makeDataGrid(),
    queuedBlocks: List([]),
    staticBlocksGrid: makeDataGrid()
});

export const GameLogicStore = (state = GameLogicDefaultState, action?) => {

        switch (action.type) {

            case RENDER_GRID:
                return state.set('dataGridState', action.dataGridState);

            case STATIC_BLOCKS:
                return state.set('staticBlocksGrid', action.staticBlocksGrid)
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


