import { showSection, e } from './dom.js';

const catalogSection = document.getElementById('catalogSection');
const ul = catalogSection.querySelector('ul');
catalogSection.remove();


export function showCatalogPage() {
    showSection(catalogSection);

    loadMovies();
}


async function loadMovies() {
    ul.replaceChildren(e('p', {}, 'Loading...'));

    const res = await fetch('http://localhost:3030/data/movies');
    const movies = await res.json();

    catalogSection.querySelector('ul').replaceChildren(...movies.map(createMovieCard));
}

function createMovieCard(movie){
    return e('li', {}, movie.title);
}