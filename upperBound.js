function upperBound(arr, X) {
    let mid;
    let low = 0;
    let high = arr.length;
 
    while (low < high) {
        mid = Math.floor((high + low) / 2);
        if (X == arr[mid]) {
            low = mid + 1;
        } else if (X < arr[mid]) {
            high = mid;
        } else {
            low = mid + 1;
        }
    }
    if(low < arr.length && arr[low] <= X) {
       low++;
    }
    return low;
}
module.exports = upperBound;