let createBook = (function bookGenerator () {
    let index = 1;
    return function (selector, title, author, isbnNumber) {
        let container = $(selector);

        let bookContainer = $('<div>');
        bookContainer.attr('id', 'book' + index++);
        bookContainer.css('border', 'medium none;');

        let titleParagraph = $('<p>');
        titleParagraph.addClass('title');
        titleParagraph.text(title);

        let authorParagraph = $('<p>');
        authorParagraph.addClass('author');
        authorParagraph.text(author);

        let isbnParagraph = $('<p>');
        isbnParagraph.addClass('isbn');
        isbnParagraph.text(isbnNumber);

        let selectButton = $('<button>Select</button>').click(selectBook);
        let deselectButton = $('<button>Deselect</button>').click(deselectBook);

        let fragment = document.createDocumentFragment();

        bookContainer.append(titleParagraph)
                        .append(authorParagraph)
                        .append(isbnParagraph)
                        .append(selectButton)
                        .append(deselectButton);
        console.log(bookContainer);
        bookContainer.appendTo(fragment);
        container.append(bookContainer);
        $('body').append(container);

        function selectBook () {
            bookContainer.css('border', '2px solid blue');
        }
        
        function deselectBook () {
            bookContainer.css('border', 'none');
        }
    };
})()
