function solve (inputArray, sortType) {
    let ascendingComparator = (a, b) => {
        return a - b;
    }

    let descendingComparator = (a, b) => {
        return b - a;
    }

    let sortInputArray = {
        asc: ascendingComparator,
        desc: descendingComparator
    }

    return inputArray.sort(sortInputArray[sortType]);
}

// console.log(solve([14, 7, 17, 6, 8], 'asc'));
// console.log(solve([14, 7, 17, 6, 8], 'desc'));


