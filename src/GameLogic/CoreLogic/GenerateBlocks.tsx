import {Map, List} from 'immutable';
import {store} from '../../Store/Reducers';
import {actionCurrentBlock, actionMovingBlock, actionRemoveQueuePiece, actionUpdateQueue} from '../Actions';
import {BlocksArray} from './Blocks';

export const storeGetState = () => (store.getState() as Map<string, Map<string, any>>);

export const generateBlocksQueue = (index: number) => {
    for (let i = 0; i < index; i++) {
        const pickedBlock: object = BlocksArray[Math.floor(Math.random() * BlocksArray.length)];

        store.dispatch(actionUpdateQueue(pickedBlock));
    }

};

export const newBlockInGame = () => {
    const blocks: List<any> = storeGetState().getIn(['GameLogicReducer', 'queuedBlocks']);
    const block: {0: number[][],1: number[][],2: number[][],3: number[][],4: number[][]} = blocks.get(0);
    const grid = storeGetState().getIn(['GameLogicReducer', 'dataGridState']);
    store.dispatch(actionCurrentBlock(block));
    store.dispatch(actionRemoveQueuePiece(0));

    // bisogna randomizzare


    store.dispatch(actionMovingBlock({
        block: blocks[0],
        downKey: false,
        dataGridState: grid,
        blockPositionVertical: 0,
        lockedBlocks: grid,
        blockPositionHorizontal: 5

    }));
};
