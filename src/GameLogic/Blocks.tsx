const I = [[4]];
const O = [[2, 0, 0], [2, 0, 0]];
const T = [[3, 0], [0, 1, 0, 0]];
const S = [[2, 0, 0, 0], [0, 2, 0, 0]];
const Z = [[0, 2, 0, 0], [2, 0, 0]];
const J = [[3, 0], [2, 0, 0]];
const L = [[3, 0], [0, 0, 1, 0]];

const GameArray: number [][] = [];

const UnpackTetromino = (tetronimo: {} []) => {
    const temporaryArray: number[] = [];
    tetronimo.map((cellContent: number []) => {

        cellContent.map(passedNumber => {
            if (passedNumber === 0) {
                temporaryArray.push(0);
            } else {
                for (const i = 0; i < passedNumber; i + 1) {
                    temporaryArray.push(1);
                }
            }
            GameArray.push(temporaryArray);
        });

    });

};

const makeArray = () => {
    const temporaryArray: number [] = [];

};
