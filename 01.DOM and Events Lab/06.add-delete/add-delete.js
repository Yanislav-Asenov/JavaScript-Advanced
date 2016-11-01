function addItem () {
    let ul = document.getElementById('items');
    let newTextField = document.getElementById('newText');
    let newLi = document.createElement('li');
    let span = document.createElement('span');
    span.innerHTML = '<a href="#">[Delete]</a>';
    span.firstChild.addEventListener('click', deleteItem);
    newLi.textContent = newTextField.value;
    newLi.appendChild(span);
    ul.appendChild(newLi);
    newTextField.value = '';

    function deleteItem () {
        let listOfItems = document.getElementById('items');
        let itemToDelete = this.parentNode.parentNode;
        listOfItems.removeChild(itemToDelete);
    }
}
