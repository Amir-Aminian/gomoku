const calculateWinner = (array)  => {
    let maxCount = 0;
    let tempCount =1;
    for (let i = 0; i < (array.length-1); i++) {
        if (array[i] == array[i+1] && array[i] != 0) {
            tempCount = tempCount + 1;
            if (tempCount > maxCount) {
                maxCount = tempCount;
            }
        } else {
            tempCount = 1;
        }
    }
    return maxCount;
}