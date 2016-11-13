function cardDeckBuilder (selector) {
    function addClickEvent (card) {
        $(card).on('click', function (ev) {
                let cards = $(`${selector} .card`);
                $(`${selector} .card`).remove();
                for (let i = cards.length - 1; i >= 0; i--) {
                    let card = addClickEvent($(cards[i]));
                    $(selector).append(card);
                }
        });

        return card;
    }

    return {
        addCard: function (face, suit) {
            let suits = { C: '\u2663', D: '\u2666', H: '\u2665', S: '\u2660'};
            let card = $(`<div class="card">${face} ${suits[suit]}</div>`);
            $(selector).append(addClickEvent(card));
        }
    };
}
