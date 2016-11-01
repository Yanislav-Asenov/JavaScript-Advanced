function attachEvents () {
    $('a').click(selectItem);

    function selectItem () {
        let allLinks = $('a').toArray();
        for (let link of allLinks) {
            if ($(link).hasClass('selected')) {
                $(link).removeClass('selected');
            }
        }
        $(this).addClass('selected');
    }
}
