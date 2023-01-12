import { cardList } from './refs';
import { genres} from './genres.json'


function createCard(response) {
  const linkPoster = 'https://image.tmdb.org/t/p/w400'
  const card = response.results
    .map(({ id, poster_path, title, release_date, genre_ids }) => {
      if (poster_path === "" || poster_path === "null" || poster_path === null) {
        poster_path = 'https://i.pinimg.com/originals/74/3d/b2/743db230d891b47c1d8c66b161111b91.jpg'
      } else {
        poster_path = linkPoster + poster_path;
      }
      
      return `<li class="cards__item" id="${id}">
        <a class="cards__link">
            <img class="cards__img" src="${poster_path}" alt="${title}" loading="lazy">
        </a>
            <div class="cards__text"><h2 class="cards__name">${getShortName(
              title
            )}</h2>
            <p class="cards__genres"> ${findGenresOfMovie(
              genre_ids
            )} | ${createYear(release_date)}</p>
            </div>
        </li>`
    }
    )
    .join('');
  cardList.insertAdjacentHTML('beforeend', card);
}



function findGenresOfMovie(ids) {
  const arr = ids.flatMap(id => genres.filter(element => element.id === id));
  let movieGenres = arr.map(el => el.name);
  if (movieGenres.length > 2) {
    const removedGenres = movieGenres.splice(0, 2);
    removedGenres.push('Other');

    return removedGenres.join(', ');
  }
  if (movieGenres.length === 0) {
    return (movieGenres = 'Genre not found');
  }
  return movieGenres.join(', ');
}

function getShortName(string) {
  if (string) {
    if (string.length >= 32) {
      return string.substr(0, 32) + '...';
    }
    return string;
  }
}

function createYear(data) {
  if (data) {
    return data.slice(0, 4);
  } else {
    return (data = 'Year not found');
  }
}

export { createCard, findGenresOfMovie, getShortName, createYear };
