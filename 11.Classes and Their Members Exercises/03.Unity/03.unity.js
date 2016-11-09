class Rat {
    constructor (name) {
        this.name = name;
        this.rats = [];
    }

    unite (otherRat) {
        if (otherRat.constructor.name === this.constructor.name) {
            this.rats.push(otherRat);
        }
    }

    getRats () {
        return this.rats;
    }

    toString () {
        let resultString = `${this.name}\n`;
        for (let rat of this.rats) {
            resultString += `###${rat.name}\n`;
        }

        return resultString;
    }
}
