class Card {
    constructor (face, suit) {
        this.face = face;
        this.suit = suit;
    }

    set face (newFace) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        if (validFaces.indexOf(newFace) === -1) {
            throw new Error('Not valid face: ' + newFace);
        }

        this._face = newFace;
    }

    get face () {
        return this._face;
    }

    set suit (newSuit) {
        let validSuits = { S: '♠', H: '♥', D: '♦', C: '♣' };
        if (!validSuits[newSuit]) {
            throw Error('Invalid suit: ' + newSuit);
        }

        this._suit = validSuits[newSuit];
    }

    get suit () {
        return this._suit;
    }

    toString () {
        return `${this.face}${this.suit}`;
    }
}