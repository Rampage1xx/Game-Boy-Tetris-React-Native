export const START = 'START';
export const MOVING_BLOCK = 'MOVING_BLOCK';
export const TURN_OFF = 'TURN_OFF';
export const LEFT_KEY = 'LEFT_KEY';
export const RIGHT_KEY = 'RIGHT_KEY';
export const DOWN_KEY = 'DOWN_KEY';
export const RENDER_GRID = 'RENDER_GRID';
export const NEXT_BLOCK = 'NEXT_BLOCK';
export const GENERATE_QUEUE = 'GENERATE_QUEUE';
export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const REMOVE_QUEUE_PIECE = 'REMOVE_QUEUE_PIECE';
export const STATIC_BLOCKS = 'STATIC_BLOCKS';
export const UPDATE_CURRENT_BLOCK = 'UPDATE_CURRENT_BLOCK';
export const CURRENT_BLOCK = 'CURRENT_BLOCK';
export const ACTIVE_BLOCK = 'ACTIVE_BLOCK';
export const ON = 'ON';

export const actionStart = () => ({type: START});
export const actionON = () => ({type: ON});
export const actionMovingBlock = (parameters: IActionMovingBlockReturnGrid): IEncapusaledActionMovingBlock => {
    const {
        block, dataGridState, blockPositionVertical,
        blockPositionHorizontal, lockedBlocks, downKey
    } = parameters;

    return {
        type: MOVING_BLOCK,
        data: {
            block,
            dataGridState,
            blockPositionVertical,
            blockPositionHorizontal,
            lockedBlocks,
            downKey
        }

    };
};

export const actionGenerateQueue = (blocksToMake: number) => ({type: GENERATE_QUEUE, blocksToMake});

export const actionRenderGrid = (dataGridState) => ({type: RENDER_GRID, dataGridState});

export const actionNextBlock = () => ({type: NEXT_BLOCK});

export const actionCurrentBlock = (block) => ({type: CURRENT_BLOCK, block});

export const actionRemoveQueuePiece = (blockToRemove: number) => ({type: REMOVE_QUEUE_PIECE, blockToRemove});

export const actionUpdateQueue = (blockToAdd) => ({type: UPDATE_QUEUE, blockToAdd});

export const actionDownKey = () => ({type: DOWN_KEY});

export const actionLeftKey = () => ({type: LEFT_KEY});

export const actionRightKey = () => ({type: RIGHT_KEY});

export const actionActiveBlock = () => ({type: ACTIVE_BLOCK});
