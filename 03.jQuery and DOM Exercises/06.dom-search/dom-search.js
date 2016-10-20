function domSearch (selector, isCaseSensitive) {
    let fragment = document.createDocumentFragment();

    // add text elements
    let addControlsDiv = $('<div class="add-controls"></div>');
    let addTextLabel = $('<label>Enter text: </label>');
    let addTextInputField = $('<input id="add-text-field" type="text" />');
    let addTextAnchor = $('<a href="#" class="button">Add</a>');

    addTextAnchor.click(addText);

    addControlsDiv.append(addTextLabel)
                    .append(addTextInputField)
                    .append(addTextAnchor);

    
    addControlsDiv.appendTo(fragment);
    
    // search text elements
    let searchControlsDiv = $('<div class="search-controls"></div>');
    let searchTextLabel = $('<label>Search: </lable>');
    let searchTextInputField = $('<input type="text" id="search-text-field" />');

    searchTextInputField.keyup(searchForItem);

    searchControlsDiv.append(searchTextLabel).append(searchTextInputField);
    searchControlsDiv.appendTo(fragment);

    // result elements
    let resultControlsContainer = $('<div>');
    resultControlsContainer.addClass('result-controls');
    let ul = $('<ul>');
    ul.addClass('items-list');

    resultControlsContainer.append(ul);
    resultControlsContainer.appendTo(fragment);

    $(selector).append(fragment);

    function deleteItem () {
        $(this).parent().remove();
    }

    function addText () {
        let newTextValue = $('#add-text-field').val();
         $('#add-text-field').val('');
        let li = $('<li>');
        li.addClass('list-item');
        let deleteButton = $('<a href="#" class="button">X</a>');
        deleteButton.click(deleteItem);
        li.append(deleteButton);
        let strong = $('<strong>');
        strong.append(newTextValue);
        li.append(strong);
        ul.append(li);
    }

    function searchForItem () {
        let value = $(this).val();
        let allItems = $('.items-list .list-item strong').toArray();

        $.each(allItems, (indexInArray, valueOfElement) => { 
            $(allItems[indexInArray]).parent().css('display', '');
        });

        for (let item of allItems) {
            let currentItem = $(item).parent();

            if (isCaseSensitive) {
                if (currentItem.text().indexOf(value) !== -1) {
                    currentItem.css('display', '');
                } else {
                    currentItem.css('display', 'none');
                }
            } else {
                if (currentItem.text().toLowerCase().indexOf(value.toLowerCase()) !== -1) {
                    currentItem.css('display', '');
                } else {
                    currentItem.css('display', 'none');
                }
            }
        }
    }
    
}
