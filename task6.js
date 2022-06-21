// updates data model
function updateDataModel(dataModel, rowId, columnId, player) {
    if (player == 0) {
        dataModel[rowId][columnId] = 2;
    } else {
    dataModel[rowId][columnId] = 1;
    }
    return dataModel;
}