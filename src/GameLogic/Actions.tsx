export const START = 'START';
export const MOVING_BLOCK = 'MOVING_BLOCK';
export const TURN_OFF = 'TURN_OFF';
export const DOWN_KEY = 'DOWN_KEY';
export const RENDER_GRID = 'RENDER_GRID';
export const GENERATE_QUEUE = 'GENERATE_QUEUE';
export const UPDATE_QUEUE = 'UPDATE_QUEUE';
export const REMOVE_QUEUE_PIECE = 'REMOVE_QUEUE_PIECE';
export const CURRENT_BLOCK = 'CURRENT_BLOCK';
export const ACTIVE_BLOCK = 'ACTIVE_BLOCK';
export const ON = 'ON';
export const HORIZONTAL_MOVEMENT = 'HORIZONTAL_MOVEMENT';
export const GAME_OVER = 'GAME_OVER';
export const ROTATE_BLOCK = 'ROTATE_BLOCK';

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

export const actionCurrentBlock = (block) => ({type: CURRENT_BLOCK, block});

export const actionRemoveQueuePiece = (blockToRemove: number) => ({type: REMOVE_QUEUE_PIECE, blockToRemove});

export const actionUpdateQueue = (blockToAdd: {}) => ({type: UPDATE_QUEUE, blockToAdd});

export const actionDownKey = (down: boolean) => ({type: DOWN_KEY, down});

export const actionActiveBlock = () => ({type: ACTIVE_BLOCK});

export const actionHorizontalMovement = (direction: number) => ({type: HORIZONTAL_MOVEMENT, direction});

export const actionGameOver = (gameOver: boolean) => ({type: GAME_OVER, gameOver})

export const actionRotateBlock = (rotatedBlock: number [][]) => ({type: ROTATE_BLOCK, rotatedBlock})
