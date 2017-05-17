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

interface ILockedParameters {
    data: {dataGridState: number[][]};
    locked: boolean;
}

interface IChangeGridStatusResult {

    completed?: boolean;
    locked?: boolean;
    data: IChangeGridStatusParameters;
}

interface IBlockMovementWorker extends IChangeGridStatusParameters {
    type: string;
}
