const BOARD_SIZE = 15;
const CHIP_STATE = {
	EMPTY: 0,
	BLACK: -1,
	WHITE: 1
};
let whiteNext = true;
let dataModel = [];

const createDataModel = (size) => {
    for (let rowId = 0; rowId < size; rowId++) {
        let row = [];
        for (let columnId = 0; columnId < size; columnId++) {
            row.push(CHIP_STATE.EMPTY);
        }
        dataModel.push(row);
    }
};

const createGameBoard = (size) => {
    const gameboard = document.createElement("div");
    gameboard.id = "gameboard";
    document.body.appendChild(gameboard);
    const background = document.createElement("table");
    background.id = "background";
    for (let i = 0; i < size - 1; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < size - 1; j++) {
            const column = document.createElement("td");
            row.appendChild(column);
        }
        background.appendChild(row);
        }
    gameboard.appendChild(background);
};

const tdCellClicked = (event) => {
    let xy = event.target.id.split("_")
    let x = Number(xy[0]);
    let y = Number(xy[1]);
    if (dataModel[x][y] !== CHIP_STATE.EMPTY) {
        return;
    }
    if (whiteNext) {
        dataModel[x][y] = CHIP_STATE.WHITE
    } else {
        dataModel[x][y] = CHIP_STATE.BLACK
    }
    whiteNext = !whiteNext;
    calculateWinner(x, y);
};

const extract4ArraysToCalculate = (x, y) => {
    let size = BOARD_SIZE - 1;
    let result = [];

    result.push(dataModel[x]);

    let clickedColumn = [];
    for (let i = 0; i < dataModel.length; i++) {
        clickedColumn.push(dataModel[i][y]);
    }
    result.push(clickedColumn);

    let diagonalRow1 = [];
    let min1 = Math.min(x, y);
    let x1 = x - min1;
    let y1 = y - min1;
    while (x1 < dataModel.length && y1 < dataModel[x1].length) {
        diagonalRow1.push(dataModel[x1][y1]);
        x1++;
        y1++;
    }
    result.push(diagonalRow1);

    let diagonalRow2 = [];
    let min2 = Math.min(size - x, y);
    let x2 = x + min2;
    let y2 = y - min2;
    while (x2 >= 0 && y2 < dataModel[x2].length) {
        diagonalRow2.push(dataModel[x2][y2]);
        x2--;
        y2++;
    }
    result.push(diagonalRow2);

    return result;
};

const calculateMaxCount = (array) => {
    let maxCount = 0;
    let tempCount = 1;
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length - 1; j++) {
            if (array[i][j] == array[i][j+1] && array[i][j] != 0) {
                tempCount = tempCount + 1;
                if (tempCount > maxCount) {
                    maxCount = tempCount;
                }
            } else {
                tempCount = 1;
            }
        }    
    }
    return maxCount;
};

const calculateWinner = (x, y) => {
    let array = extract4ArraysToCalculate(x, y);
    let maxCount = calculateMaxCount(array);
    if (maxCount < 5) {
        return;
    }
    whiteNext ? alert("Black Wins") : alert("White Wins")
};

const tdCellPreClickedColor = (event) => {
    let xy = event.target.id.split("_")
    let x = Number(xy[0]);
    let y = Number(xy[1]);
    if (dataModel[x][y] !== CHIP_STATE.EMPTY) {
        return;
    }
    if (whiteNext) {
        event.target.style.backgroundColor = "white";
    } else {
        event.target.style.backgroundColor = "black";
    }
};

const tdCellNotClicked = (event) => {
    let xy = event.target.id.split("_")
    let x = Number(xy[0]);
    let y = Number(xy[1]);
    if (dataModel[x][y] == CHIP_STATE.EMPTY) {
        event.target.style.backgroundColor = "transparent";
    }
};

const creatChips = (size) => {
    const chips = document.createElement("table");
    chips.id = "chips";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            const tdCell = document.createElement("td");
            tdCell.id = i + "_" + j;
            tdCell.addEventListener("click", tdCellClicked);
            tdCell.addEventListener("mouseover", tdCellPreClickedColor);
            tdCell.addEventListener("mouseout", tdCellNotClicked);
            row.appendChild(tdCell);
        }
        chips.appendChild(row);
    }
    gameboard.appendChild(chips);
};

const initialize = (size) => {
    createDataModel(size);
    createGameBoard(size);
    creatChips(size);
};

initialize(BOARD_SIZE);