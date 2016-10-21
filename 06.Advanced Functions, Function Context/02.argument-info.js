function solve () {
    let argumentsTypeCounter = [];

    for (let argument of arguments) {
        let typeOfArgument = typeof argument;

        if (!argumentsTypeCounter[typeOfArgument]) {
            argumentsTypeCounter[typeOfArgument] = 0;
        }

        argumentsTypeCounter[typeOfArgument]++;
        console.log(`${typeOfArgument}: ${argument}`);
    }

    let sortedArgs = [];

    for (let index in argumentsTypeCounter) {
        sortedArgs.push({
            count: argumentsTypeCounter[index],
            type: index
        });
    }

    sortedArgs.sort((a, b) => {
        return b.count - a.count;
    });

    for (let index in sortedArgs) {
        console.log(`${sortedArgs[index].type} = ${sortedArgs[index].count}`);
    }
}

// solve('cat', 42, function () { console.log('Hello world!'); }, 'cat', 'cat', 'cat', 'cat', function () { console.log('Hello world!'); }, function () { console.log('Hello world!'); });
