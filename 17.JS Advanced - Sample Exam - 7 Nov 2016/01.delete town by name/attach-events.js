(function attachEvents() {
    $('#btnDelete').on('click', function (ev) {
        let townToDelete = $('#townName');
        let townOpetions = $('#towns option');
        let hasDeleted = false;

        townOpetions.each(function (index, element) {
            let currentOption = $(element);
            if (currentOption.text() === townToDelete.val()) {
                currentOption.remove();
                hasDeleted = true;
            }
        });

        if (hasDeleted && townToDelete.val()) {
            $('#result').text(`${townToDelete.val()} deleted.`);
        } else {
            $('#result').text(`${townToDelete.val()} not found.`);
        }
        
        townToDelete.val('');
    });
})();
