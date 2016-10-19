// let $ = require('../jquery-3.1.1.min.js')

function extractText() {
    let items = $('#items li').toArray().map(item => item.textContent).join(', ');
    $('#result').text(items)
}