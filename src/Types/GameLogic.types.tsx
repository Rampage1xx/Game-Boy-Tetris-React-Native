interface IChangeGridStatus {
    (parameter: IChangeGridStatusParameters);
}

interface IChangeGridStatusParameters {

    dataGridState: number[][];
    block: number[][];
    blockPositionVertical: number;
    blockPositionHorizontal: number;
    lockedBlocks: number[][];
}
interface IActionMovingBlockReturnGrid extends IChangeGridStatusParameters {
    downKey: boolean;
}

interface IReturnTypeGridChange {
    data: IActionMovingBlockReturnGrid,
    locked?: boolean,
    completed?: boolean,
}

interface IEncapusaledActionMovingBlock {
    data: IActionMovingBlockReturnGrid;
    type: string;
}

interface ILockedParameters {
    data: { dataGridState: number[][] };
    locked: boolean;
}

interface IChangeGridStatusResult {

    completed?: boolean;
    locked?: boolean;
    data: IChangeGridStatusParameters;
}

interface IGameLogicActions {
    type: string;
    currentBlock: any;
    staticBlocksGrid: any;
    dataGridState: any;
    blockToAdd: any;
    blocksToRemove: number;
    data: IActionMovingBlockReturnGrid;
}


interface IGameLogicNewStore {
    data: {
        block: number [][],
        dataGridState: number [][],
        blockPositionVertical: number ,
        blockPositionHorizontal: number,
        lockedBlocks: number [][],
        downKey: boolean
    };
    renderedGrid: number [][];
}

interface IChangeGameGridNew {
    (parameter:{vertical: number, horizontal: number, locked: boolean, downKey: boolean})
}
