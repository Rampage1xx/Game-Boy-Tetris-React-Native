import {RENDER_GRID} from './Actions';
import { Map } from 'immutable';
import {makeDataGrid} from './Grid';


const GameLogicDefaultState = Map({
dataGridState: makeDataGrid()

});

export const GameLogicStore = (state = GameLogicDefaultState, action?) => {

        switch (action.type) {

            case RENDER_GRID:
                return state.set('dataGridState', action.dataGridState);

            default:
                return state;
        }

    }
;
