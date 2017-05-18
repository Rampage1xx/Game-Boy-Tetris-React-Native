import {List, Map} from 'immutable';
import {store} from '../../Store/Reducers';
import {
    actionActiveBlock,
    actionCurrentBlock,
    actionMovingBlock,
    actionRemoveQueuePiece,
    actionUpdateQueue
} from '../Actions';
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
    const block: IBlock = blocks.get(0);
    const grid = storeGetState().getIn(['GameLogicReducer', 'dataGridState']);
    store.dispatch(actionCurrentBlock(block));
    store.dispatch(actionRemoveQueuePiece(0));
    // need to implement random pick block

    store.dispatch(actionMovingBlock({
        block: block[0],
        downKey: false,
        dataGridState: grid,
        blockPositionVertical: 0,
        lockedBlocks: grid,
        blockPositionHorizontal: 5

    }));
    store.dispatch(actionActiveBlock());
};
