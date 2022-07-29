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

let white = 0;
let black = 0;
const calculateWinner = (x, y) => {
    let array = extract4ArraysToCalculate(x, y);
    let maxCount = calculateMaxCount(array);
    if (maxCount < 5) {
        return;
    }
    if (whiteNext) {
        black ++;
        alert("Black Wins");
        whiteNext = true
        dataModel = [];
        createDataModel(BOARD_SIZE);
        let chips = document.getElementById("chips").getElementsByTagName("td");
        for (let i = 0; i < chips.length; i++) {
            chips[i].style.backgroundColor = "transparent";
        }
        document.getElementById("playerBlack").innerHTML = "Player Black Wins: " + black;
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Playing Timer: 0:0:0";
        document.getElementById("chips").addEventListener("mouseover", addEvent);
    } else {
        white ++;
        alert("White Wins");
        whiteNext = true
        dataModel = [];
        createDataModel(BOARD_SIZE);
        let chips = document.getElementById("chips").getElementsByTagName("td");
        for (let i = 0; i < chips.length; i++) {
            chips[i].style.backgroundColor = "transparent";
        }
        document.getElementById("playerWhite").innerHTML = "Player White Wins: " + white;
        clearInterval(interval);
        document.getElementById("timer").innerHTML = "Playing Timer: 0:0:0";
        document.getElementById("chips").addEventListener("mouseover", addEvent);
    }
}

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
}

const tdCellNotClicked = (event) => {
    let xy = event.target.id.split("_")
    let x = Number(xy[0]);
    let y = Number(xy[1]);
    if (dataModel[x][y] == CHIP_STATE.EMPTY) {
        event.target.style.backgroundColor = "transparent";
    }
}

const addEvent = () => {
    document.getElementById("chips").addEventListener("click", startTimer);
}

let interval;
const startTimer = () => {
    let hr = 0;
    let min = 0;
    let sec = 0;
    document.getElementById("chips").removeEventListener("click", startTimer)
    document.getElementById("chips").removeEventListener("mouseover", addEvent)
    interval = setInterval(() => {
        if (sec < 59) {
            sec++;
        } else {
            sec = 0;
            if (min < 59) {
                min++;
            } else {
                min = 0;
                hr++;
            }
        }
        document.getElementById("timer").innerHTML = "Playing Timer: " + hr + ":" + min + ":" + sec;
    }, 1000)
}

const creatChips = (size) => {
    const chips = document.createElement("table");
    chips.id = "chips";
    chips.addEventListener("click", startTimer)
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

const resetPage = () => {
    location.reload()
}

const popupInstructions = () => {
    document.getElementById("popup").classList.toggle("show");
}

const creatButtonsAndLabels = () => {
    const instructions = document.createElement("button");
    instructions.type = "button";
    instructions.id = "instructions";
    instructions.addEventListener("click", popupInstructions);
    instructions.innerHTML = "Instructions";
    document.body.appendChild(instructions);
    const reset = document.createElement("button");
    reset.type = "button";
    reset.id = "reset";
    reset.addEventListener("click", resetPage);
    reset.innerHTML = "Reset"
    document.body.appendChild(reset);
    const playerWhite = document.createElement("p")
    playerWhite.id = ("playerWhite");
    playerWhite.innerHTML = "Player White Wins: 0"
    document.body.appendChild(playerWhite);
    const playerBlack = document.createElement("p")
    playerBlack.id = ("playerBlack");
    playerBlack.innerHTML = "Player Black Wins: 0"
    document.body.appendChild(playerBlack);
    const popup = document.createElement("p")
    popup.id = ("popup");
    popup.className = ("hidden")
    popup.innerHTML = "It is a simple board game named Gomoku, also called Five in a Row. It is an abstract strategy board game, and it is traditionally played with black and white stones. Players alternate turns placing a stone of their color on an empty intersection. White plays first. The winner is the first player to form an unbroken chain of five stones horizontally, vertically, or diagonally."
    document.body.appendChild(popup);
    const timer = document.createElement("p")
    timer.id = ("timer");
    timer.innerHTML = "Playing Timer: 0:0:0"
    document.body.appendChild(timer);
}

const initialize = (size) => {
    createDataModel(size);
    createGameBoard(size);
    creatChips(size);
    creatButtonsAndLabels();
}

initialize(BOARD_SIZE);