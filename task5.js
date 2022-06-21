// data model
function dataModel(dataModel) {
    for (let rowId = 0; rowId < 15; rowId++) {
        for (let columnId = 0; columnId < 15; columnId++) {
            column.innerHTML = (dataModel[rowId][columnId]);
        }
    }
}