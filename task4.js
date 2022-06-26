const createDataModel = (size) => {
    for (let rowId = 0; rowId < size; rowId++) {
        let row = [];
        for (let columnId = 0; columnId < size; columnId++) {
            row.push(0);
        }
        dataModel.push(row)
    }
}