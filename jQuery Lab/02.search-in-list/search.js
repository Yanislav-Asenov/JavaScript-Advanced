function search() {
    let searchedText = $('#searchText').val();
    let towns = $('#towns li').toArray();
    let matchesCount = 0;

    for (let index = 0; index < towns.length; index++) {
        let element = $(towns[index]);
        if (element.text().indexOf(searchedText) > -1) {
            element.css('font-weight', 'bold');
            matchesCount++;
        } else {
            element.css('font-weight', 'normal');
        }
        $('#result').text(matchesCount + ' matches found.')
    }
}
