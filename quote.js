


const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '1305c6e7e7mshde138e41a132e92p1f152fjsndc906e1e8a10',
        'X-RapidAPI-Host': 'love-quote.p.rapidapi.com'
    }
}
// fetch('https://love-quote.p.rapidapi.com/lovequote', options)
//     .then(response => response.json().then(data=>console.log(data)))



let quote = document.getElementById("quote");
let author = document.getElementById("author")
let btn = document.getElementById("btn")

BASE_URL = "https://love-quote.p.rapidapi.com/lovequote"
// function randomQuote() {
//     return Math.floor(Math.random() * quoteList.length)
// }


function getRandomQuote() {

    fetch(`${BASE_URL}`, options).then(value => value.json().then(data => {
        quote.innerText = data.quote;
        author.innerText = data.author;
    }))

}
btn.onclick=()=> {
    getRandomQuote()
}