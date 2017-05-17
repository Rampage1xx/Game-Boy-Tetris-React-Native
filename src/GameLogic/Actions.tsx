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

export const startAction = () => ({type: START});

export const actionMovingBlock: IChangeGridStatus = (parameters: IBlockMovementWorker) => {
    const {block, dataGridState, blockPositionVertical, blockPositionHorizontal, lockedBlocks} = parameters;

    return {
        type: MOVING_BLOCK,
        block,
        dataGridState,
        blockPositionVertical,
        blockPositionHorizontal,
        lockedBlocks
    };
};

export const actionStaticBlocks = (staticBlocksGrid) => ({type: STATIC_BLOCKS, staticBlocksGrid});

export const actionRenderGrid = (dataGridState) => ({type: RENDER_GRID, dataGridState});

export const actionNextBlock = () => ({type: NEXT_BLOCK});

export const actionRemoveQueuePiece = (blockToRemove: number) => ({type: REMOVE_QUEUE_PIECE, blockToRemove});

export const actionGenerateQueue = (blocksToMake) => ({type: GENERATE_QUEUE, blocksToMake});

export const actionUpdateQueue = (blocksToAdd) => ({type: UPDATE_QUEUE, blocksToAdd});

export const actionDownKey = () => ({type: DOWN_KEY});

export const actionLeftKey = () => ({type: LEFT_KEY});

export const actionRightKey = () => ({type: RIGHT_KEY});
