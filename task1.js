let task1 = [1, 1, 1, 0, -1, -1, -1, -1, -1, 0, 0, 0, 0, 0, 0, 0, -1, -1, 0];
let max_count = 0;
let count = 1;
calculate_count(...task1);
function calculate_count() {
    for (let i = 0; i < (task1.length-1); i++) {
        if (task1[i] == task1[i+1] && task1[i] != 0) {
            count = count + 1;
            if (count > max_count) {
                max_count = count
            }
        } else {
            count = 1;
        }
    }
    alert("count: " + max_count);
}