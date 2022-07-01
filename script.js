const BOARD_ZISE = 15;
const CHIP_STATE = {
	EMPTY: 0,
	BLACK: -1,
	WHITE: 1
}
let whiteNext = true;

const createDataModel = (size) => {
    let dataModel = [];
    for (let rowId = 0; rowId < size; rowId++) {
        let row = [];
        for (let columnId = 0; columnId < size; columnId++) {
            row.push(CHIP_STATE.EMPTY);
        }
        dataModel.push(row)
    }
    return dataModel;
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

const tdCellClicked = (event) =>{
    //change cell's css to show the chip with correct color
    //check if anyone wins
}

const creatChips = (size, dataModel) => {
    const chips = document.createElement("table");
    chips.id = "chips";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        row.id = i;
        for (let j = 0; j < size; j++) {
            const tdCell = document.createElement("td");
            tdCell.id = i + "_" + j;
            tdCell.dataset.value = dataModel[i][j];
            tdCell.addEventListener("click", tdCellClicked);
            row.appendChild(tdCell);
        }
        chips.appendChild(row);
    }
    gameboard.appendChild(chips);
}

const initialize = (size) => {
    let dataModel = createDataModel(size);
    createGameBoard(size);
    creatChips(size, dataModel);
}

initialize(BOARD_ZISE);