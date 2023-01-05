import { cardList } from './refs';

function createCard2(response) {
  const card = response.results
    .map(
      ({ id, poster_path, title, release_date, genre_ids }) =>
        `<li class="cards__item" id="${id}">
        <a class="cards__link">
            <img class="cards__img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" loading="lazy">
        </a>
            <div class="cards__text"><h2 class="cards__name">${getShortName(
              title
            )}</h2>
            <p class="cards__genres"> ${findGenresOfMovie(
              genre_ids
            )} | ${createYear(release_date)}</p>
            </div>
        </li>`
    )
    .join('');
  cardList.insertAdjacentHTML('beforeend', card);
}

export { createCard2 };
