function solve (inputArray) {
    let cars = new Map();

    let carManager = {
        create: ([carName, secondCommand, parent]) => {
            parent = parent ? cars.get(parent) : null;
            let newCar = Object.create(parent);
            cars.set(carName, newCar);
            return newCar;
        },
        set: ([carName, key, value]) => {
            let targetCar = cars.get(carName);
            targetCar[key] = value;
        },
        print: ([carName]) => {
            let targetCar = cars.get(carName);
            let keys = []
            let childKeys = Object.keys(targetCar);
            keys.push.apply(keys, childKeys);
            let firstParent = Object.getPrototypeOf(targetCar);

            let parent = Object.getPrototypeOf(targetCar);
            while (parent) {
                let parentKeys = Object.keys(parent);
                keys.push.apply(keys, parentKeys);
                parent = Object.getPrototypeOf(parent);
            }

            let resultString = keys.map((key) => `${key}:${targetCar[key]}`).join(', ');
            console.log(resultString);
        }
    };

    for (let lineArguments of inputArray) {
        let currentArgs = lineArguments.split(' ');
        let command = currentArgs.shift();
        carManager[command](currentArgs);
    }
}

// solve([
//     'create c1',
//     'create c2 inherit c1',
//     'set c1 color red',
//     'set c2 model new',
//     'print c1',
//     'print c2'
// ]);


// solve([
//     'create pesho',
//     'create gosho inherit pesho',
//     'create stamat inherit gosho',
//     'set pesho rank number1',
//     'set gosho nick goshko',
//     'print stamat'
// ]);