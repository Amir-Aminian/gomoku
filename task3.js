// creats the game enviroment
// creats a div with id of gameboard and appends it to the body
const gameboard = document.createElement("div");
gameboard.id = "gameboard";
document.body.appendChild(gameboard);
// creats two table on top of eachother as background and chips with ids of background and chips and appends them to the gameboard div
const layers = ["background", "chips"];
for (let i = 0; i < layers.length; i++) {
    const table = document.createElement("table");
    table.id = layers[i];
    for (let i = 0; i < 15; i++) {
        const row = document.createElement("tr");
        row.id = i;
        for (let i = 0; i < 15; i++) {
            const column = document.createElement("td");
            column.id = row.id + "_" + i;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    gameboard.appendChild(table);
}