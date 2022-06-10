let task1 = [1, -1, 0, -1, -1, -1, -1];
let count = 1;
calculate_count(...task1);
function calculate_count() {
    for (let i = 0; i < (task1.length-1); i++) {
        if (task1[i] == task1[i+1]) {
            count = count + 1;
        } else {
            count = 1;
        }
    }
    alert("count: " + count);
}