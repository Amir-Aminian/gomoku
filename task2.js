function extract4ArraysToCalculate(table, x, y) {
    let result = [];
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
    let x1 = x-min1;
    let y1 = y-min1;
    while (x1 < table.length && y1 < table[x1].length) {
        diagonalRow1.push(table[x1][y1]);
        x1++;
        y1++;
    }
    result.push(diagonalRow1);
/*checks the coordinates diagonally in second direction*/
    let diagonalRow2 = [];
    let min2 = Math.min(x, y);
    let x2 = x2 + min2;
    let y2 = y2 - min2;
    while (x2 >= 0 && y2 < table[x2].length) {
        c.push(table[x2][y2]);
        x2 = x2 - 1;
        y2 = y2 + 1;
    }
    result.push(c);
/*gives the output*/
    return result;
}