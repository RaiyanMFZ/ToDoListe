const button = document.getElementById('button')
const listPage = document.getElementById('list')

button.addEventListener('click', function () {
    const inputText = document.getElementById('text').value;

    localStorage.setItem('text', inputText)

    alert("Eintrag erstellt.")
})

function loadNewPage() {
    const storedInputText = localStorage.getItem('text')


}