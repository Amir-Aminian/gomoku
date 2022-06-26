const sendDataModel = (dataModel) => {
    for (let rowId = 0; rowId < size; rowId++) {
        for (let columnId = 0; columnId < size; columnId++) {
            document.getElementById(rowId + "_" + columnId).innerHTML = (dataModel[rowId][columnId]);
        }
    }
}