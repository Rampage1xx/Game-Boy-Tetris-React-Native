import {List, Map} from 'immutable';

declare type TStartingState = (
    Map<string,
        List<any> |
        Map<string, number | boolean | List<any>>>
    );

const startingState: TStartingState = Map({
    data: Map({
        block: List([]),
        dataGridState: List([]),
        blockPositionVertical: 99,
        blockPositionHorizontal: 99,
        lockedBlocks: List([]),
        downKey: false
    }),
    renderedGrid: List([])

});

const GameLogicReducerNew = (state = startingState, action?) => {
    switch (action.type) {
        case 'HORIZONTAL_MOVEMENT':
            return state;
        case 'VERTICAL_MOVEMENT':
            return state;

        default:
            return state;
    }

};

