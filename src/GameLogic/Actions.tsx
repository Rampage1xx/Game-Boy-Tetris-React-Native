export const START = 'START';
export const MOVING_BLOCK = 'MOVING_BLOCK';
export const TURN_OFF = 'TURN_OFF';

export const startAction = () => ({type: START});

export const actionMovingBlock = (block, grid, position, offset) => ({
    type: MOVING_BLOCK,
    block,
    grid,
    position,
    offset
});
