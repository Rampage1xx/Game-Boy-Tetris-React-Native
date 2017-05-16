interface IChangeGridStatus {
    (parameter: IChangeGridStatusParameters);
}

interface IChangeGridStatusParameters {

    dataGridState: number[][],
    blockMasterArray: number[][],
    blockPositionVertical: number,
    blockPositionHorizontal: number,

}

