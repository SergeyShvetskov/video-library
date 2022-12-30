const refs = {
  generalContainer: document.querySelector('.test-container'),
  input: document.querySelector('.header-search__input'),
};

const API_KEY = 'a79202f0028fac6a27982a88fb1459a6';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie';
const BASE_URL_FOR_IMG = 'https://image.tmdb.org/t/p/w500';

refs.input.addEventListener('input', onChangeInputValue);

// https://api.themoviedb.org/3/search/keyword?api_key=<<api_key>>&page=1

//api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false&query=

function fetchAPI(movie) {
  return fetch(
    `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${movie}`
  ).then(response => {
    return response.json();
  });
}

function onCreateListMovieMarkup(results) {
  const itemMarkup = results
    .map(
      result => `<div class="film-box">
  <img src="${BASE_URL_FOR_IMG}${
        result.poster_path
      }" alt="фільм альт" class="film-img"  width="280"/><div class="film-info">
  <h2 class="film-title">${result.original_title.toUpperCase()}</h2>
  <p class="film-genres">${
    result.genre_ids
  } &#10072 <span class="film-year">${result.release_date.slice(0, 4)}</span>
  <span class="film-rating">${result.vote_average.toFixed(1)}</span></p>
  </div>
  </div>`
    )
    .join('');
  console.log('bcdjkb');
  refs.generalContainer.insertAdjacentHTML('beforeend', itemMarkup);
}

function onChangeInputValue(e) {
  console.log(e.target.value);
  if (e.target.value.trim() === '') {
    onClearMarkup();
    return;
  }
  fetchAPI(e.target.value.trim())
    .then(({ results }) => {
      console.log(results);
      onCreateListMovieMarkup(results);
    })
    .catch(onError);
}

function onError() {
  console.log('error');
}
