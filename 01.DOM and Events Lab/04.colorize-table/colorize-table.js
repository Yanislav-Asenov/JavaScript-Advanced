function colorizeRows () {
    let tableElements = document.querySelectorAll('table tr');

    let counter = 1;
    for (let element of tableElements) {
        if (counter % 2 === 0) {
        element.style.background = 'Teal';
        }
        counter++;
    }
}
