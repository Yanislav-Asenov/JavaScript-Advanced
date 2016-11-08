function solve (inputArr) {
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

    let resultCards = [];
    let isValid = true;

    for (let card of inputArr) {
        let face = card.slice(0, card.length - 1);
        let suit = card[card.length - 1];
        let currentCard = {};
        try {
            currentCard = new Card(face, suit);
            resultCards.push(currentCard.toString());
        } catch (ex) {
            console.log(`Invalid card: ${face}${suit}`);
            isValid = false;
        }
    }

    if (isValid) {
        console.log(resultCards.join(' '));
    }
}

// solve(['AS', '10D', 'KH', '2C']);
// solve(['5S', '3D', 'QD', '1C']);