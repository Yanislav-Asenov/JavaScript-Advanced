(function solve () {
    String.prototype.ensureStart = ensureStart;
    String.prototype.ensureEnd = ensureEnd;
    String.prototype.isEmpty = isEmpty;
    String.prototype.truncate = truncate;
    String.format = format;
    

    function ensureStart (str) {
        if (this.startsWith(str)) {
            return this.toString();
        }

        return str + this.toString();
    }

    function ensureEnd (str) {
        if (this.endsWith(str)) {
            return this.toString();
        }

        return this.toString() + str;
    }

    function isEmpty () {
        return this.toString() === '';
    }

    function truncate (n) {
        if (this.length <= n)  {
            return this.toString();
        }
 
        if (n < 4){
            return '.'.repeat(n);
        }
 
        if (!this.includes(' ')){
            return this.slice(0, n - 3) + '...';
        }
 
        let tokens = this.split(' ');
        let result = tokens[0];
 
        for (let i = 1; i < tokens.length; i++) {
            if (result.length + tokens[i].length + 4 > n) {
                return result + '...';
            }

            result += ` ${tokens[i]}`;
        }
    }

    function format (str, ...params) {
       return str.replace(/\{([\d]+)\}/g, function (fullMatch, group) {
            if(params[Number(group)] !== undefined) {
                return params[Number(group)];
            }
            return fullMatch;
        });
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

