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
createGameBoard(15);