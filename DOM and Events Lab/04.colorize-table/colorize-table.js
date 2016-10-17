function colorizeRows () {
  let tableElements = document.querySelectorAll('table tr')
  console.log(tableElements)
  let counter = 1
  for (let element of tableElements) {
    if (counter % 2 === 0) {
      element.style.background = 'teal'
    }
    counter++
  }
}
