import { cloneDeep, fill } from 'lodash'

export const changeGridStatus: IChangeGridStatus = (parameters): IChangeGridStatusResult | ILockedParameters => {
    const {dataGridState, block, blockPositionVertical, blockPositionHorizontal, lockedBlocks} = parameters;
    const horizontalGridLength = 10;
    const temporaryGrid = cloneDeep(lockedBlocks);
    const error = 'Illegal movement, occupied space bigger than the grid';
    try {
        for (let i = 0; i < block.length; i++) {
            // picks a row of the block
            const blockRow = block[i];
            // gets higher as the rows of the block go up
            const verticalGridRow = (blockPositionVertical - i);

            // space occupied by the block
            const totalOccupiedSpace = (blockPositionHorizontal + block[i].length);

            if (verticalGridRow < 0) {
                // irrelevant movement
                break;
            } else if (totalOccupiedSpace > horizontalGridLength) {
                // illegal movement
                throw {error, totalOccupiedSpace, horizontalGridLength};
                // return {temporaryGrid: dataGridState, completed: false};
            }

            const zeros = blockRow.filter(blockNumbers => blockNumbers === 0);
            // zeroes are only relevant to the starting  horizontal offset position.
            const correctedPosition = blockPositionHorizontal + zeros.length;
            // the number to slice should be only those affected by the blocks presence (represented by number one)
            const endSlice = blockPositionHorizontal + blockRow.length - zeros.length;

            const resultRow = temporaryGrid[verticalGridRow].slice(correctedPosition, endSlice);
            const searchResult = resultRow.indexOf(1);

            if (searchResult !== -1) {
                return {data: {dataGridState}, locked: true};

            }
            fill(temporaryGrid[verticalGridRow], 1, correctedPosition, endSlice);
            //  console.log(fill(prova[verticalGridRow], 1, correctedPosition, endSlice))
        }
        // block has hit the bottom
        if (blockPositionVertical === 15) {
            return {locked: true, data: {dataGridState: temporaryGrid}};
        } else {
            return {
                completed: true,
                data: {
                    dataGridState: temporaryGrid,
                    blockPositionVertical: blockPositionVertical + 1,
                    blockPositionHorizontal,
                    block,
                    lockedBlocks
                }
            };
        }
    }catch(error) {
        throw error
    }
};
