let table = [[3, 2, 1, 7], [9, 11, 5 ,4], [6, 0, 13, 17], [7, 21, 14, 15]];
let arr = [];
let x = 0;
let y = 1;
myfunction(...table);
function myfunction() {
/*checks the coordinates horizontally*/
    arr.push(table[x]);
/*checks the coordinates vertically*/
    let a = [];
    for (let i = 0; i < table.length; i++) {
        a.push(table[i][y]);
    }
    arr.push(a);
/*checks the coordinates diagonally in first direction*/
    let b = [];
    let new_x = x;
    let new_y = y;
    while (new_x > 0 && new_y > 0) {
        new_x = new_x - 1;
        new_y = new_y - 1;
    }
    while (new_x < table.length && new_y < table[new_x].length) {
        b.push(table[new_x][new_y]);
        new_x = new_x + 1;
        new_y = new_y + 1;
    }
    arr.push(b);
/*checks the coordinates diagonally in second direction*/
    let c = [];
    let new_new_x = x;
    let new_new_y = y;
    while (new_new_x < table.length && new_new_y > 0) {
        new_new_x = new_new_x + 1;
        new_new_y = new_new_y - 1;
    }
    while (new_new_x >= 0 && new_new_y < table[new_new_x].length) {
        c.push(table[new_new_x][new_new_y]);
        new_new_x = new_new_x - 1;
        new_new_y = new_new_y + 1;
    }
    arr.push(c);
/*gives the output*/
    console.log(arr);
}