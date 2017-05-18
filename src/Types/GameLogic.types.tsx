
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



interface IGameLogicActions {
    type: string;
    currentBlock: any;
    staticBlocksGrid: any;
    dataGridState: any;
    blockToAdd: any;
    blockToRemove: number;
    data: IActionMovingBlockReturnGrid;
    block: number[][];
}



interface IChangeGameGridNew {
    (parameter:{vertical: number, horizontal: number, locked: boolean, downKey: boolean})
}
