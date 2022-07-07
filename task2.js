const extract4ArraysToCalculate = (dataModel, x, y) => {
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
    while (x2 > 0 && y2 < dataModel[x2].length) {
        diagonalRow2.push(dataModel[x2][y2]);
        x2--;
        y2++;
    }
    result.push(diagonalRow2);

    return result;
}