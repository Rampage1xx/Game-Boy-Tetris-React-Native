interface ICommonParameters {
    dataGridState: number[][];
    block: number[][];
    blockPositionVertical: number;
    blockPositionHorizontal: number;
}

interface IChangeGridStatusParameters extends ICommonParameters {

    lockedBlocks: number[][];
}
interface IDataObject extends IChangeGridStatusParameters {
    downKey: boolean;
    blockColor: number;
    blockLength: number;
}

interface IReturnTypeGridChange {
    data: IDataObject;
    locked?: boolean;
    completed?: boolean;
    discard?: boolean;

}

interface IGridChangeGameOver {
    gameOver: boolean;
}

interface IEncapusaledActionMovingBlock {
    data: IDataObject;
    type: string;
}

interface IGameLogicActions {
    type: string;
    currentBlock: any;
    staticBlocksGrid: any;
    dataGridState: any;
    blockToAdd: any;
    blockToRemove: number;
    data: IDataObject;
    block: number[][];
    gameOver: boolean;
    rotatedBlock: number[][];
}

interface IChangeGameGrid {
    (parameter: {
        vertical: number; horizontal: number;
        locked: boolean; downKey: boolean;
        rotatedBlock?: number[][];
    });
}

interface IBlock {
    0: number[][];
    1: number[][];
    2: number[][];
    3: number[][];
    4: number[];
    5: number;
}
interface IMakeDataParameter {

    dataGridState, blockPositionVertical,
    blockPositionHorizontal, block , lockedBlocks, downKey,
}

interface IBlockObject {
    1: number[][], 2: number[][], 3: number[][], 4: number[]
}
