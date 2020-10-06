const search = document.querySelector('#search');
const remove = document.querySelector('#remove');
const form = document.querySelector('form');
const images = document.querySelector('#images');

require('dotenv').config();

remove.addEventListener('click', () => {
    images.textContent = '';
})

var mykey = config.MY_KEY;
var secretkey = config.SECRET_KEY;
form.addEventListener('submit', e => {
    e.preventDefault();

    const searchVal = search.value;

    fetch(`https://api.giphy.com/v1/gifs/trending?q=${searchVal}&api_key= process.env.API_KEY`, {
            method: 'GET',
            credentials: 'same-origin',
        })
        .then(res => res.json())
        .then(res => {
            console.log(res.data)
            res.data.forEach(data => {
                const url = data.images.original.url;
                const img = document.createElement("img");
                img.src = url;
                images.appendChild(img);

            })
        })
        .catch(err => {
            const errDiv = document.createElement('div');
            errDiv.textContent = 'Something went wrong please try again later';

            images.textContent = '';
            images.appendChild(errDiv);
        });
});