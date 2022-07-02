const BOARD_ZISE = 15;
const CHIP_STATE = {
	EMPTY: 0,
	BLACK: -1,
	WHITE: 1
}
let whiteNext = true;
let dataModel = [];

const createDataModel = (size) => {
    for (let rowId = 0; rowId < size; rowId++) {
        let row = [];
        for (let columnId = 0; columnId < size; columnId++) {
            row.push(CHIP_STATE.EMPTY);
        }
        dataModel.push(row)
    }
}

const createGameBoard = (size) => {
    const gameboard = document.createElement("div");
    gameboard.id = "gameboard";
    document.body.appendChild(gameboard);
    const background = document.createElement("table");
    background.id = "background";
    for (let i = 0; i < size - 1; i++) {
        const row = document.createElement("tr");
        for (let i = 0; i < size - 1; i++) {
            const column = document.createElement("td");
            row.appendChild(column);
        }
        background.appendChild(row);
        }
    gameboard.appendChild(background);
}

const tdCellClicked = (event) => {
    let x = event.target.id.split("_")[0];
    let y = event.target.id.split("_")[1];
    if (dataModel[x][y] == CHIP_STATE.EMPTY && whiteNext) {
        event.target.style.backgroundColor = "white";
        dataModel[x][y] = CHIP_STATE.WHITE
        whiteNext = false;
    } else if (dataModel[x][y] == CHIP_STATE.EMPTY) {
        event.target.style.backgroundColor = "black";
        dataModel[x][y] = CHIP_STATE.BLACK
        whiteNext = true;
    }
}

const calculateWinner = (event) => {
    let x = event.target.id.split("_")[0];
    let y = event.target.id.split("_")[1];
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
    let min2 = Math.min(x, y);
    let x2 = x + min2;
    let y2 = y - min2;
    while (x2 >= 0 && y2 < dataModel[x2].length) {
        diagonalRow2.push(dataModel[x2][y2]);
        x2--;
        y2++;
    }
    result.push(diagonalRow2);

    let maxCount = 0;
    let tempCount =1;
    for (let j = 0; j < result.length-1; j++) {
        for (let i = 0; i < result.length-1; i++) {
            if (result[i] == result[i+1] && result[i] != 0) {
                tempCount = tempCount + 1;
                if (tempCount > maxCount) {
                    maxCount = tempCount;
                }
            } else {
                tempCount = 1;
            }
            if (maxCount == 5 && whiteNext) {
                alert("Player One Wins")
            } else if (maxCount == 5 && whiteNext) {
                alert("Player Two Wins")
            }
        }    
    }
}

const tdCellPreClickedColor = (event) => {
    let x = event.target.id.split("_")[0];
    let y = event.target.id.split("_")[1];
    if (dataModel[x][y] == CHIP_STATE.EMPTY && whiteNext) {
        event.target.style.backgroundColor = "white";
    } else if (dataModel[x][y] == CHIP_STATE.EMPTY) {
        event.target.style.backgroundColor = "black";
    }
}

const tdCellNotClicked = (event) => {
    let x = event.target.id.split("_")[0];
    let y = event.target.id.split("_")[1];
    if (dataModel[x][y] == CHIP_STATE.EMPTY) {
        event.target.style.backgroundColor = "transparent";
    }
}

const creatChips = (size) => {
    const chips = document.createElement("table");
    chips.id = "chips";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        for (let j = 0; j < size; j++) {
            const tdCell = document.createElement("td");
            tdCell.id = i + "_" + j;
            tdCell.addEventListener("click", tdCellClicked, calculateWinner);
            tdCell.addEventListener("mouseover", tdCellPreClickedColor);
            tdCell.addEventListener("mouseout", tdCellNotClicked);
            row.appendChild(tdCell);
        }
        chips.appendChild(row);
    }
    gameboard.appendChild(chips);
}

const initialize = (size) => {
    createDataModel(size);
    createGameBoard(size);
    creatChips(size);
}

initialize(BOARD_ZISE);