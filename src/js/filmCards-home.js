import allGenres from './genres.json';
import { modal } from './modal';
import MovesApiService from './fetchMove';

const refs = {
  cardsListLibrary: document.querySelector('.cards__list--library'),
  cardsList: document.querySelector('.cards__list'),
};

const movieInfoFetch = new MovesApiService();

refs.cardsList.addEventListener('click', onClickCard);

function onClickCard(event) {
  movieInfoFetch.id = event.path[2].id;

  localStorage.setItem(`id-movie`, movieInfoFetch.id);

  if (event.path[2]) {
    modal.classList.remove('is-hidden');
    movieInfoFetch.fetchMoviesInfo().then(data => {
      console.log(data);
     createModal(data);
    })
  }


}
function createModal({ id, poster_path, title, vote_count, vote_average, popularity, original_title, genres, description }) {
  const modalMovie = `<div class="modal-window" id="${id}">
    <button type="button" class="modal-close-btn button" data-modal-close>
      <svg class="modal-close-btn-icon" width="30" height="30">
        <use href="./images/symbol-defs.svg#icon-close"></use>
      </svg>
    </button>
    <img
      class="modal-movie-img"
      src="https://image.tmdb.org/t/p/w400${poster_path}"
      alt="${title}"
    />
    <div modal-tab-container>
      <h2 class="modal-movie-title">${title}</h2>
      <table>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-votes">Vote / Votes</td>
          <td class="modal-movie-data">${vote_average} / ${vote_count}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-popularity">Popularity</td>
          <td class="modal-movie-data">${popularity}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-original-title">Original title</td>
          <td class="modal-movie-data">${original_title}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-genre">Genre</td>
          <td class="modal-movie-data">${genres}</td>
        </tr>
      </table>

      <h4 class="modal-movie-about-title">About</h4>
      <p class="modal-movie-description">${description}</p>
      <div class="modal-btns">
        <button type="button" class="modal-form-watched-bnt">
          Add to watched
        </button>
        <button type="button" class="modal-form-queue-bnt">Add to queue</button>
      </div>
    </div>
  </div>`;

  modal.insertAdjacentHTML('beforeend', modalMovie);


}

function createCard(response) {
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
  refs.cardsList.insertAdjacentHTML('beforeend', card);
}

//отображение года выпуска
function createYear(data) {
  if (data) {
    return data.slice(0, 4);
  } else {
    return (data = 'Not found');
  }
}

//обрезка название
function getShortName(string) {
  if (string) {
    if (string.length >= 32) {
      return string.substr(0, 32) + '...';
    }
    return string;
  }
}

// жанр
const { genres } = allGenres;
function findGenresOfMovie(ids) {
  const arr = ids.flatMap(id => genres.filter(element => element.id === id));
  let movieGenres = arr.map(el => el.name);
  if (movieGenres.length > 2) {
    const removedGenres = movieGenres.splice(0, 2);
    removedGenres.push('Other');

    return removedGenres.join(', ');
  }
  if (movieGenres.length === 0) {
    return (movieGenres = 'Not found');
  }
  return movieGenres.join(', ');
}

export { createCard, findGenresOfMovie };
export { idMovie };

// import allGenres from './genres.json';

// const cardsListLibrary = document.querySelector('.cards__list--library');
// const cardsList = document.querySelector('.cards__list');

// //создание карточки
// function createCard(data) {
//   return data
//     .map(obj => {
//       const { id, poster_path, title, release_date, genre_ids } = obj;
//       return `<li class="cards__item" id="${id}">
//         <a class="cards__link">
//             <img class="cards__img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" loading="lazy">
//         </a>
//             <div class="cards__text"><h2 class="cards__name">${getShortName(
//               title
//             )}</h2>
//             <p class="cards__genres"> ${findGenresOfMovie(
//               genre_ids
//             )} | ${createYear(release_date)}</p>
//             </div>
//         </li>`;
//     })
//     .join('');
// }

// //вставка разметки
// function insertMarkup(htmlMarkup, htmlEl) {
//   htmlEl.innerHTML = htmlMarkup;
// }
// //отображение года выпуска
// function createYear(data) {
//   if (data) {
//     return data.slice(0, 4);
//   } else {
//     return (data = 'Not found');
//   }
// }
// //обрезка название
// function getShortName(string) {
//   if (string) {
//     if (string.length >= 32) {
//       return string.substr(0, 32) + '...';
//     }
//     return string;
//   }
// }
// // жанр
// const { genres } = allGenres;
// function findGenresOfMovie(ids) {
//   const arr = ids.flatMap(id => genres.filter(element => element.id === id));
//   let movieGenres = arr.map(el => el.name);
//   if (movieGenres.length > 2) {
//     const removedGenres = movieGenres.splice(0, 2);
//     removedGenres.push('Other');
//     return removedGenres.join(', ');
//   }
//   if (movieGenres.length === 0) {
//     return (movieGenres = 'Not found');
//   }
//   return movieGenres.join(', ');
// }
// export {
//   createCard,
//   insertMarkup,
//   findGenresOfMovie,
//   cardsList,
//   cardsListLibrary,
// };
