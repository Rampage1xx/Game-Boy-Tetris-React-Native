interface IChangeGridStatus {
    (parameter: IChangeGridStatusParameters);
}

interface IChangeGridStatusParameters {

    dataGridState: number[][];
    block: number[][];
    blockPositionVertical: number;
    blockPositionHorizontal: number;

}


interface IChangeGridStatusResult {

    completed?: boolean;
    locked?: boolean;
    data: IChangeGridStatusParameters
};
