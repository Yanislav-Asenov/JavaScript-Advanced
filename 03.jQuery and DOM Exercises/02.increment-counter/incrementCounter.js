function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textarea = $('<textarea class="counter"></textarea>')
                    .attr('disabled', true)
                    .val('0');
    let incrementButton = $('<button id="incrementBtn" class="btn">Increment</button>').click(incrementNumber);
    let addButton = $('<button id="addBtn" class="btn" >Add</button>').click(addNumber);
    let results = $('<ul>');
    results.addClass('results');

    textarea.appendTo(fragment);
    incrementButton.appendTo(fragment);
    addButton.appendTo(fragment);
    results.appendTo(fragment);
    container.append(fragment);
    
    $('body').append(container);

    function incrementNumber () {
        let resultNumber = Number($('.counter').val()) + 1;
        $('textarea').val(resultNumber);
    }

    function addNumber () {
        let li = $('<li>');
        let value = parseInt(textarea.val());
        li.text(value);
        results.append(li);
    }
}
