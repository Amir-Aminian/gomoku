// creats the data model
function dataModel() {
    let dataModel = [];
    for (let rowId = 0; rowId < 15; rowId++) {
        for (let columnId = 0; columnId < 15; columnId++) {
            rowArray = [];
            rowArray.push(document.getElementById(rowId + "_" + columnId));
        }
        dataModel.push(rowArray);
    }
    return dataModel;
}