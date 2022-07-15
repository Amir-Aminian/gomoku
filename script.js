const BOARD_SIZE = 15;
const CHIP_STATE = {
	EMPTY: 0,
	BLACK: -1,
	WHITE: 1
};
let whiteNext = true;
let dataModel = [];

const createDataModel = (size) => {
    for (let i = 0; i < size; i++) {
        let row = [];
        for (let j = 0; j < size; j++) {
            row.push(CHIP_STATE.EMPTY);
        }
        dataModel.push(row);
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
        for (let j = 0; j < size - 1; j++) {
            const column = document.createElement("td");
            row.appendChild(column);
        }
        background.appendChild(row);
        }
    gameboard.appendChild(background);
}

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
}

const extratFirstArray = (x, y, size) => {
    let firstArray = [];
    let newY = y;
    for (let i = 0; i < 4; i++) {
        if (newY > 0) {
            newY--;
        }
    }
    for (let j = 0; j < y + 5; j++) {
        if (newY < size) {
            firstArray.push(dataModel[x][newY]);
            newY++;
        }
    }
    return firstArray;
}

const extractSecondArray = (x, y, size) => {
    let secondArray = [];
    let newX = x;
    for (let i = 0; i < 4; i++) {
        if (newX > 0) {
            newX--;
        }
    } 
    for (let j = 0; j < x + 5; j++) {
        if (newX < size) {
            secondArray.push(dataModel[newX][y]);
            newX++;
        }
    }
    return secondArray;
}

const extractThirdArray = (x, y, size) => {
    let thirdArray = [];
    let newX = x;
    let newY = y;
    for (let i = 0; i < 4; i++) {
        if (newX > 0 && newY > 0) {
            newX--;
            newY--;
        }        
    }
    for (let j = 0; j < x + 5; j++) {
        if (newX < size && newY < size) {
            thirdArray.push(dataModel[newX][newY]);
            newX++;
            newY++;
        }
    }
    return thirdArray;
}

const extractFourthArray = (x, y, size) => {
    let fourthArray = [];
    let newX = x;
    let newY = y;
    for (let i = 0; i < 4; i++) {
        if (newX < size - 1 && newY > 0) {
            newX++;
            newY--;
        }        
    }
    for (let j = 0; j < y + 5; j++) {
        if (newX >= 0 && newY < size) {
            fourthArray.push(dataModel[newX][newY]);
            newX--;
            newY++;
        }
    }
    return fourthArray;
}

const extract4ArraysToCalculate = (x, y) => {
    let size = BOARD_SIZE;
    let firstArray = extratFirstArray(x, y, size);
    let secondArray = extractSecondArray(x, y, size);
    let thirdArray = extractThirdArray(x, y, size);
    let fourthArray = extractFourthArray(x, y, size);
    let result = [firstArray, secondArray, thirdArray, fourthArray];
    return result;
}

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
}

const calculateWinner = (x, y) => {
    let array = extract4ArraysToCalculate(x, y);
    let maxCount = calculateMaxCount(array);
    if (maxCount < 5) {
        return;
    }
    whiteNext ? alert("Black Wins") : alert("White Wins")
    location.reload()
}

const tdCellPreClickedColor = (event) => {
    let xy = event.target.id.split("_")
    let x = Number(xy[0]);
    let y = Number(xy[1]);
    if (dataModel[x][y] !== CHIP_STATE.EMPTY) {
        return;
    }
    if (whiteNext) {
        event.target.style.backgroundColor = "rgb(255,255,255,0.9)";
    } else {
        event.target.style.backgroundColor = "rgb(0,0,0,0.7)";
    }
}

const tdCellNotClicked = (event) => {
    let xy = event.target.id.split("_")
    let x = Number(xy[0]);
    let y = Number(xy[1]);
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
            tdCell.addEventListener("click", tdCellClicked);
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

initialize(BOARD_SIZE);