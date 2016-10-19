function attachEvents() {
    $('#items li').click(selectTown);
    $('#showTownsButton').click(printTowns);

    function printTowns () {
        let items = $('#items li').toArray().filter(x => $(x).attr('data-selected')).map(item => item.textContent);
        $('#selectedTowns').text('Selected towns: ' + items.join(', '));
    }

    function selectTown () {
        let item = $(this);

        if (item.attr('data-selected')) {
            item.removeAttr('data-selected').css('background', 'white');
        } else {
            item.attr('data-selected', true).css('background', '#DDD');
        }
    }
}
