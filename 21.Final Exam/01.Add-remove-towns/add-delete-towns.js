function attachEvents () {
    $('#btnDelete').on('click', function (ev) {
        $('#towns option:selected').remove();
    });

    $('#btnAdd').on('click', function (ev) {
        let townToAdd = $('#newItem').val();
        if (townToAdd !== '') {
            let newTownOption = $(`<option>${townToAdd}</option>`);
            $('#towns').append(newTownOption);
            $('#newItem').val('');
        }
    });
}
