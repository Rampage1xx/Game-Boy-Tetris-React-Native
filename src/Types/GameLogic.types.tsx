interface ICommonParameters {
    dataGridState: number[][];
    block: number[][];
    blockPositionVertical: number;
    blockPositionHorizontal: number;
}

interface IChangeGridStatusParameters extends ICommonParameters {

    lockedBlocks: number[][];
}
interface IActionMovingBlockReturnGrid extends IChangeGridStatusParameters {
    downKey: boolean;
}

interface IReturnTypeGridChange {
    data: IActionMovingBlockReturnGrid;
    locked?: boolean;
    completed?: boolean;
}

interface IGridChangeGameOver {
    gameOver: boolean;
}

interface IEncapusaledActionMovingBlock {
    data: IActionMovingBlockReturnGrid;
    type: string;
}

interface IGameLogicActions {
    type: string;
    currentBlock: any;
    staticBlocksGrid: any;
    dataGridState: any;
    blockToAdd: any;
    blockToRemove: number;
    data: IActionMovingBlockReturnGrid;
    block: number[][];
    gameOver: boolean;
}

interface IChangeGameGridNew {
    (parameter: { vertical: number, horizontal: number, locked: boolean, downKey: boolean });
}

interface IBlock {
    0: number[][];
    1: number[][];
    2: number[][];
    3: number[][];
    4: number[][];
}
