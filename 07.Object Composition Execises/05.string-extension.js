(function solve () {
    String.prototype.ensureStart = ensureStart;
    String.prototype.ensureEnd = ensureEnd;
    String.prototype.isEmpty = isEmpty;
    String.prototype.truncate = truncate;
    String.format = format;
    

    function ensureStart (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }

        return this + '';
    }

    function ensureEnd (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this + '';
    }

    function isEmpty () {
        if (!this) {
            return true;
        }

        return false;
    }

    function truncate (n) {
        
    }

    function format (str) {
        let regex = /\{.+?}/g;
        let match = regex.exec(str);
        let argumentsIndex = 1;
        while (match) {
            if (!arguments[argumentsIndex]) {
                return str;
            }

            let firstPart = str.slice(0, match.index);
            let matchLength = match[0].length;
            let secondPart = str.slice(match.index + matchLength);
            let resultString = firstPart + arguments[argumentsIndex] + secondPart;
            str = resultString;
            match = regex.exec(str);
            argumentsIndex++;
        }

        return str;
    }
})()


let str = 'my string';

str = str.ensureStart('my');
console.log(str);
str = str.ensureStart('hello ');
console.log(str);
str = str.truncate(16);
console.log(str);
str = str.truncate(14);
console.log(str);
str = str.truncate(8);
console.log(str);
str = str.truncate(4);
console.log(str);
str = str.truncate(2);
console.log(str);
str = String.format('The {0} {1} fox',
  'quick', 'brown');
console.log(str);
str = String.format('jumps {0} {1}',
  'dog');
console.log(str);

