function* solve (inputArrr) {
    for (let i = inputArrr.length - 1; i >= 0; i--) {
        yield inputArrr[i];
    }
}

for (let item of solve([1, 2, 3, 4, 5])) {
    console.log(item);
}
