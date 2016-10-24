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

        return this;
    }

    function ensureEnd (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }

        return this;
    }

    function isEmpty () {
        return this === '';
    }

    function truncate (n) {
        return this.slice(0, n) + '...';
    }

    function format (str) {
        let regex = /\${.+?}/g;
        let match = regex.exec(str);
        let argumentsIndex = 1;
        while (match) {
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
})();


let testString = 'testestetes${testvar}sadsad asd sad  sdas d ${testVar} sdasdsadsad asdsadasdasda${testvar}sadsdsadsadasd ds 123 123123 13${testvar}';

console.log(testString.truncate(10));
