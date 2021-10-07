const scriptURL = 'https://script.google.com/macros/s/AKfycbwx01oUcTFdn7nPW1mH-Svgu7Bmfl4HmNz7tY3ccch_aEzQOtorgyAZWDEv7AtcQ6RzXw/exec'
const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => console.log('Success!', response))
        .then(() => {
            //This is where I write my code
document.querySelector('#email').value = ""
document.querySelector('#first-name').value = ""
document.querySelector('#last-name').value = ""
window.location.href = '../Page 2/page2_index.html' 


            //Do not alter below this line
        })
        .catch(error => console.error('Error!', error.message))
})