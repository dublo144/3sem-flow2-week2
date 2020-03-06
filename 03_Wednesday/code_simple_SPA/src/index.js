import 'bootstrap/dist/css/bootstrap.css';
import jokes from './jokes';

const allJokes = jokes.getJokes().map(joke => '<li>' + joke + '</li>');
document.getElementById('jokes').innerHTML = allJokes.join('');

const jokeBtn = document.getElementById('getJokeBtn');
jokeBtn.addEventListener('click', () => {
    const field = document.getElementById('jokeId');
    const id = field.value;
    document.getElementById('jokePlaceholder').innerHTML = jokes.getJokeById(id);
    field.value = '';
});

const addJokeBtn = document.getElementById('addJoke');
addJokeBtn.addEventListener('click', () => {
    const field = document.getElementById('newJoke');
    const joke = field.value;
    jokes.addJoke(joke);
    field.value = '';
    const allJokes = jokes.getJokes().map(joke => '<li>' + joke + '</li>');
    document.getElementById('jokes').innerHTML = allJokes.join('');
});

/* -------------------------------------------------------------------------- */
/*                                    Quote                                   */
/* -------------------------------------------------------------------------- */

// Loads quote on btn click
const quoteBtn = document.getElementById('quoteBtn');
quoteBtn.addEventListener('click', () => {
    fetch('https://studypoints.info/jokes/api/jokes/period/hour')
        .then(res => res.json())
        .then(data => {
            document.getElementById('quotePlaceholder').innerHTML = data.joke;
        });
});

// Loads quote every hour
window.addEventListener('DOMContentLoaded', () => {
    setInterval(() => {
        fetch('https://studypoints.info/jokes/api/jokes/period/hour')
            .then(res => res.json())
            .then(data => {
                document.getElementById('quotePlaceholder').innerHTML = data.joke;
            });
    }, 3600000);
});

/* -------------------------------------------------------------------------- */
/*                               FourHearts.svg                               */
/* -------------------------------------------------------------------------- */

const north = document.getElementById('north');
north.addEventListener('click', () => {
    alert('north');
});

const south = document.getElementById('south');
south.addEventListener('click', () => {
    alert('south');
});

const east = document.getElementById('east');
east.addEventListener('click', () => {
    alert('east');
});

const west = document.getElementById('west');
west.addEventListener('click', () => {
    alert('west');
});
