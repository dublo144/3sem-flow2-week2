import 'bootstrap/dist/css/bootstrap.css'


window.addEventListener('DOMContentLoaded', () => {
    fetch('https://madsbrandt.codes//CORS_backend/api/xxx')
    .then(res => res.json())
    .then(data => document.getElementById('message').innerHTML = data.msg)
});