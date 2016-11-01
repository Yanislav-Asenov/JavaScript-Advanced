function initializeTable () {
    let countriesTable = $('#countriesTable');
    $('#createLink').on('click', createRow);
    createRow('', 'Bulgaria', 'Sofia');
    createRow('', 'Germany', 'Berlin');
    createRow('', 'Russia', 'Moscow');

    function fixRowLinks () {
        $('#countriesTable a').css('display', 'inline');

        let tableRows = $('#countriesTable tr');
        $(tableRows[2]).find("a:contains('Up')").css('display', 'none');
        $(tableRows[tableRows.length - 1]).find("a:contains('Down')").css('display', 'none');
    }

    function moveRowUp () {
        let row = $(this).parent().parent()
        row.fadeOut(() => {
            row.insertBefore(row.prev());
            row.fadeIn();
            fixRowLinks();
        });
    }

    function moveRowDown () {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.insertAfter(row.next());
            row.fadeIn();
            fixRowLinks();
        });
    }

    function deleteRow () {
        let row = $(this).parent().parent();
        row.fadeOut(() => {
            row.remove();
            fixRowLinks();
        });
    }

    function createRow (empty, country, capital) {
        let newCountryText = country || $('#newCountryText').val();
        let newCapitalText = capital || $('#newCapitalText').val();

        if (newCapitalText === '' || newCapitalText === '') return;
        $('#newCountryText').val('');
        $('#newCapitalText').val('');
        let row = $('<tr>')
            .append($('<td>').text(newCountryText))
            .append($('<td>').text(newCapitalText))
            .append($('<td>')
                .append($('<a href="#" class="moveUp">[Up]</a>').click(moveRowUp))
                .append(" ")
                .append($('<a href="#" class="moveDown">[Down]</a>').click(moveRowDown))
                .append(" ")
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        row.css('display','none');
        $('#countriesTable').append(row);
        row.fadeIn();
        fixRowLinks();
    }
}
