export abstract class BaseDataObject {
    public dataGridState;
    public blockPositionVertical;
    public blockPositionHorizontal;
    public block;
    public lockedBlocks;
    public downKey;

    constructor(dataParameters) {
        const {
            dataGridState, blockPositionVertical, blockPositionHorizontal,
            block, downKey
        } = dataParameters;
        this.dataGridState = dataGridState;
        this.blockPositionVertical = blockPositionVertical;
        this.blockPositionHorizontal = blockPositionHorizontal;
        this.block = block;
        this.lockedBlocks = dataGridState;
        this.downKey = downKey;
    }
}

export abstract class DataObjectWithNewPositions extends BaseDataObject {
    constructor(dataParameters, positionParameters) {
        super(dataParameters);
        const {correctedBlockPositionVertical, correctedBlockPositionHorizontal} = positionParameters;
        this.blockPositionVertical = correctedBlockPositionVertical;
        this.blockPositionHorizontal = correctedBlockPositionHorizontal;
    }
}

export class FinishedChangeGridData extends DataObjectWithNewPositions {

    constructor(dataParameters, positionParameters, remainingData) {
        super(dataParameters, positionParameters);
        const {temporaryGrid, blockToUse, lockedBlocks} = remainingData;
        this.dataGridState = temporaryGrid;
        this.block = blockToUse;
        this.lockedBlocks = lockedBlocks
    }
}

export const makeDataObject = (parameters) => {
    const {
        dataGridState, blockPositionVertical,
        blockPositionHorizontal, block, lockedBlocks, downKey
    } = parameters;

    return {
        dataGridState,
        blockPositionVertical,
        blockPositionHorizontal,
        block,
        lockedBlocks,
        downKey
    };

};






