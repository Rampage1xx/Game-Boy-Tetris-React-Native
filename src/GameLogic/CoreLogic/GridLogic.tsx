import {Map} from 'immutable';
import {cloneDeep, fill} from 'lodash';
import {store} from '../../Store/Reducers';

const storeGetState = () => (store.getState() as Map<string, Map<string, any>>);

export const allZeroes = (cell): boolean => cell === 0;

const dataObjectFactory =
    (loopFinish?) =>
        (locationChange?) =>
            (dataParameters: IMakeDataParameter): IDataObject => (
                {
                    ...dataParameters,
                    ...locationChange,
                    ...loopFinish
                });

export const changeGridStatus: IChangeGameGrid = (parameters): IReturnTypeGridChange | IGridChangeGameOver => {
    try {
        const {vertical = 0, horizontal = 0, locked, downKey, rotatedBlock} = parameters;
        const storeStatus: IDataObject = storeGetState().getIn(['GameLogicReducer', 'gridBlockData', 'data']);
        const {
            dataGridState, block, blockPositionVertical, blockPositionHorizontal,
            lockedBlocks, blockColor, blockLength
        } = storeStatus;

        const blockToUse: number[][] = rotatedBlock ? rotatedBlock : block;

        const correctedBlockPositionHorizontal = blockPositionHorizontal + horizontal;
        const correctedBlockPositionVertical = blockPositionVertical + vertical;

        const horizontalGridLength = 10;
        const temporaryGrid = cloneDeep(lockedBlocks);

        //gets data default parameters
        const dataDefaultParameters = () => ({
            dataGridState, blockPositionVertical, blockPositionHorizontal,
            block, lockedBlocks: dataGridState, downKey, blockColor, blockLength
        });

        // recompute  block position when needed
        const recomputePosition = () => ({
            blockPositionVertical: correctedBlockPositionVertical,
            blockPositionHorizontal: correctedBlockPositionHorizontal
        });

        // refreshes the grids status with the locked blocks inside it
        const finishedLoop = () => ({
            block: blockToUse,
            lockedBlocks,
            dataGridState: temporaryGrid
        });

        // HOF Building
        const defaultData = () => dataObjectFactory()()(dataDefaultParameters());
        const preemptiveEndingData = () => dataObjectFactory()(recomputePosition())(dataDefaultParameters());
        const successfulLoopData = () => dataObjectFactory(finishedLoop())(recomputePosition())(dataDefaultParameters());

        const error = 'Illegal movement, the space occupied by the tetronimo is bigger than the grid';

        for (let i = 0; i < blockToUse.length; i++) {
            // picks a row of the block
            const blockRow = blockToUse[i];
            // gets higher as the rows of the block go up
            const verticalGridRow = correctedBlockPositionVertical - i;

            // space occupied by the block
            const totalOccupiedSpace = (correctedBlockPositionHorizontal + blockRow.length );

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
            const correctedPosition = correctedBlockPositionHorizontal + zeros.length;
            // the number to slice should be only those affected by the blocks presence (represented by number one)
            const endSlice = correctedBlockPositionHorizontal + blockRow.length;
            const resultRow = temporaryGrid[verticalGridRow].slice(correctedPosition, endSlice);
            const rowIsEmpty = resultRow.every(number => allZeroes(number));
            // two blocks have collided
            if (!rowIsEmpty) {
                if (correctedBlockPositionVertical <= 0) {
                    return {gameOver: true};
                }

                // the collisions from  horizontal movements are discarded
                if (!locked) {
                    return {
                        discard: true, data: {...defaultData()}
                    };
                } else {
                    return {locked: true, data: {...preemptiveEndingData(), lockedBlocks: dataGridState}};
                }
            }
            fill(temporaryGrid[verticalGridRow], blockColor, correctedPosition, endSlice);

        }

        // block has hit the bottom
        if (correctedBlockPositionVertical === 15) {
            return {locked: true, data: {...successfulLoopData()}};

        } else {
            // starts new cycle
            return {completed: true, data: {...successfulLoopData()}};
        }
    } catch (err) {
        throw err;
    }
};
