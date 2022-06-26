const BOARD_ZISE = 15;

const createDataModel = (size) => {
    let dataModel = [];
    for (let rowId = 0; rowId < size; rowId++) {
        let row = [];
        for (let columnId = 0; columnId < size; columnId++) {
            row.push(0);
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
    for (let i = 0; i < (size - 1); i++) {
        const row = document.createElement("tr");
        for (let i = 0; i < (size - 1); i++) {
            const column = document.createElement("td");
            row.appendChild(column);
        }
        background.appendChild(row);
        }
    gameboard.appendChild(background);
}

const creatChips = (size) => {
    const chips = document.createElement("table");
    chips.id = "chips";
    for (let i = 0; i < size; i++) {
        const row = document.createElement("tr");
        row.id = i;
        for (let i = 0; i < size; i++) {
            const column = document.createElement("td");
            column.id = row.id + "_" + i;
            row.appendChild(column);
        }
        chips.appendChild(row);
        }
    gameboard.appendChild(chips);
}

const sendDataModel = (dataModel) => {
    for (let rowId = 0; rowId < dataModel.lenght; rowId++) {
        for (let columnId = 0; columnId < dataModel.lenght; columnId++) {
            document.getElementById(rowId + "_" + columnId).innerHTML = (dataModel[rowId][columnId]);
        }
    }
}

const initialize = (size) => {
    let dataModel = [];
    createDataModel(size);
    createGameBoard(size);
    creatChips (size);
    sendDataModel(dataModel);
}

initialize(BOARD_ZISE);