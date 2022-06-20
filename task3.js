// creats the game enviroment
const gameboard = document.createElement("div");
gameboard.id = "gameboard";
document.body.appendChild(gameboard);
const layers = ["background", "chips"];
for (let i = 0; i < layers.length; i++) {
    const table = document.createElement("table");
    table.id = layers[i];
    for (let i = 0; i < 15; i++) {
        const row = document.createElement("tr");
        row.id = i;
        for (let i = 0; i < 15; i++) {
            const column = document.createElement("td");
            column.id = i;
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    gameboard.appendChild(table);
}