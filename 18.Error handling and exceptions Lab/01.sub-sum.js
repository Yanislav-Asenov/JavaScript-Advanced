function subsum(arr, startIndex, endIndex) {
    let sum = 0;
    
    if (startIndex < 0) {
        startIndex = 0;
    }

    if (endIndex > arr.length) {
        endIndex = Math.max(arr.length - 1, 0);
    }

    if (!Array.isArray(arr)) {
        return NaN;
    }

    for (let i = startIndex; i <= endIndex; i++) {
        if (arr[i]) {
            sum += Number(arr[i]);
        }
    }

    return sum;
}
