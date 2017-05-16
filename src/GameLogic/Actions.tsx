export const START = 'START';
export const MOVING_BLOCK = 'MOVING_BLOCK';
export const TURN_OFF = 'TURN_OFF';
export const LEFT_KEY = 'LEFT_KEY';
export const RIGHT_KEY = 'RIGHT_KEY';
export const DOWN_KEY = 'DOWN_KEY';
export const RENDER_GRID = 'RENDER_GRID';
export const NEXT_BLOCK = 'NEXT_BLOCK';

export const startAction = () => ({type: START});

export const actionMovingBlock: IChangeGridStatus = ({block, dataGridState, blockPositionVertical, blockPositionHorizontal}) => ({
    type: MOVING_BLOCK,
    block,
    dataGridState,
    blockPositionVertical,
    blockPositionHorizontal
});

export const actionRenderGrid = (dataGridState) => ({type: RENDER_GRID, dataGridState});

export const actionNextBlock = () => ({type: NEXT_BLOCK});

export const actionDownKey = () => ({type: DOWN_KEY});

export const actionLeftKey = () => ({type: LEFT_KEY});

export const actionRightKey = () => ({type: RIGHT_KEY});
