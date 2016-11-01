function addItem () {
	let listOfItems = document.getElementById('items');
	let newTextField = document.getElementById('newItemText');
	let li = document.createElement('li');
	li.textContent = newTextField.value;
	listOfItems.appendChild(li);
	console.log(listOfItems);
	newTextField.value = '';
}
