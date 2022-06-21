// creats the data model
function dataModel() {
    let dataModel = [];
    for (let rowId = 0; rowId < 15; rowId++) {
        let rowArray = [];
        for (let columnId = 0; columnId < 15; columnId++) {
            rowArray.push(document.getElementById(rowId + "_" + columnId).innerHTML);
        }
        dataModel.push(rowArray);
    }
    return dataModel;
}