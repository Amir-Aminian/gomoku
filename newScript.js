// playing logics
let click = 0;
let player = click % 2;
let x = 0;
let y = 0;
let result = [];
function playerTurn(cell) {
    let content = cell.innerHTML; 
    x = cell.cellIndex; 
    if (content == 0) {
        if (player == 0) {
            cell.style.backgroundColor = "white";
            cell.innerHTML = 1;
            click = click + 1;
        } else {
            cell.style.backgroundColor = "black";
            cell.innerHTML = 2;
            click = click + 1;
        }     
    }
}
function filledCell(cell) {
    let content = cell.innerHTML;
    if (content == 0) {
        if (player == 0) {
            cell.style.backgroundColor = "white";
        } else {
            cell.style.backgroundColor = "black";
        }     
    }
}
function emptyCell(cell) {
    let content = cell.innerHTML;
    if (content == 0) {
        cell.style.backgroundColor = "transparent";     
    }
}
function row(cell) {
    y = id.rowIndex;
}
function extract4ArraysToCalculate(table, x, y) {
/*checks the coordinates horizontally*/
    result.push(table[x]);
/*checks the coordinates vertically*/
    let clickedColumn = [];
    for (let i = 0; i < table.length; i++) {
        clickedColumn.push(table[i][y]);
    }
    result.push(clickedColumn);
/*checks the coordinates diagonally in first direction*/
    let diagonalRow1 = [];
    let min1 = Math.min(x, y);
    let x1 = x - min1;
    let y1 = y - min1;
    while (x1 < table.length && y1 < table[x1].length) {
        diagonalRow1.push(table[x1][y1]);
        x1++;
        y1++;
    }
    result.push(diagonalRow1);
/*checks the coordinates diagonally in second direction*/
    let diagonalRow2 = [];
    let min2 = Math.min(x, y);
    let x2 = x + min2;
    let y2 = y - min2;
    while (x2 >= 0 && y2 < table[x2].length) {
        diagonalRow2.push(table[x2][y2]);
        x2--;
        y2++;
    }
    result.push(diagonalRow2);
}
function calculateWinner(result) {
    let count =1;
    result.forEach(element => {
        for (let i = 0; i < (element.length-1); i++) {
            if (result[i] == result[i+1] && result[i] != 0) {
                count = count + 1;
                if (count = 5) {
                    if (player == 0) {
                        let winner = "Player Two"
                    } else {
                        let winner = "Player one"
                    }            
                    alert("The winner is: " + winner);
                }
            } else {
                count = 1;
            }
        }
    });
}
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
            column.onmouseover = filledCell(this);
            column.onmouseout = emptyCell(this);
            column.onclick = playerTurn(this);
            row.appendChild(column);
        }
        table.appendChild(row);
    }
    gameboard.appendChild(table);
}