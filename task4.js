// creats data model
function dataModel() {
    let dataModel = [];
    for (let rowId = 0; rowId < 15; rowId++) {
        let row = [];
        for (let columnId = 0; columnId < 15; columnId++) {
            row.push(0);
        }
        dataModel.push(row)
    }
    return dataModel;
}