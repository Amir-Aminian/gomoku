const sendDataModel = (dataModel) => {
    for (let rowId = 0; rowId < dataModel.lenght; rowId++) {
        for (let columnId = 0; columnId < dataModel.lenght; columnId++) {
            document.getElementById(rowId + "_" + columnId).innerHTML = (dataModel[rowId][columnId]);
        }
    }
}