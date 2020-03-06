import 'bootstrap/dist/css/bootstrap.css';

const map = document.getElementById('svg2');
let selectedElement;
map.addEventListener('click', e => {
  selectedElement && (selectedElement.style.fill = '#c0c0c0');
  selectedElement = e.target;
  selectedElement.style.fill = '#8A2BE2';
  const id = selectedElement.id;
  fetch(`http://restcountries.eu/rest/v1/alpha?codes=${id}`)
    .then(res => res.json())
    .then(data => showCountry(data));
});

const showCountry = data => {
  data.forEach(country => {
    document.getElementById('name').innerHTML = country.name;
    document.getElementById('pop').innerHTML = country.population;
    document.getElementById('area').innerHTML = country.area;
    document.getElementById('borders').innerHTML = country.borders;
  });
};
