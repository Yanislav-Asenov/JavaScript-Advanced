function deleteByEmail () {
  let targetEmail = document.getElementsByName('email')[0].value.trim()
  let tableElements = document.querySelectorAll('#customers tr td:nth-child(2)')
  console.log(targetEmail)
  for (let td of tableElements) {
    if (td.textContent === targetEmail) {
      let row = td.parentNode
      row.parentNode.removeChild(row)
      document.getElementById('result').textContent = 'Deleted'
      document.getElementsByName('email')[0].value = ''
      return
    }
  }
  document.getElementById('result').textContent = 'Not found.'
}
