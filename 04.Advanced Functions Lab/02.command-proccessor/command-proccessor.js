function solve (commands) {
    let commandProccessor = (function proccessCommands() {
        let text = '';

        return {
            append: (str) => text += str,
            print: () => console.log(text),
            removeStart: (count) => text = text.slice(count),
            removeEnd: (count) => text = text.slice(0, text.length - count)
        };
    })();

    for (let commandArgs of commands) {
        let [command, args] = commandArgs.split(' ');
        commandProccessor[command](args);
    }
}


// solve(['append 1', 'append 2', 'append 3', 'append 4', 'append 5', 'removeStart 1', 'removeEnd 1', 'print']);