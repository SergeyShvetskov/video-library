import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import MovesApiService from './fetchMove';
import allGenres from './genres.json';
import { Notify } from 'notiflix';
import { fetchSearchMove, fetchTrendMoves } from './fetch';
import { createCard } from './func-create-cadr';
import { inputRef } from './refs';

const refs = {
  cardsListLibrary: document.querySelector('.cards__list--library'),
  cardsList: document.querySelector('.cards__list'),
  pagination: document.querySelector('.tui-pagination'),
  searchForm: document.querySelector('.header-search__wrapper'),
};

const container = document.getElementById('pagination');

const itemsPerPage = 20;

// const moves = new MovesApiService();

const options = {
  totalItems: 1000,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<div href="#" class="tui-page-btn">{{page}}</div>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected" id="current">{{page}}</strong>',
    moveButton:
      '<div href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</div>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<div href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</div>',
  },
};

const pagination = new Pagination(container, options);

// const page = pagination.getCurrentPage();

// function getShortName(string) {
//   if (string) {
//     if (string.length >= 32) {
//       return string.substr(0, 32) + '...';
//     }
//     return string;
//   }
// }
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
// function createYear(data) {
//   if (data) {
//     return data.slice(0, 4);
//   } else {
//     return (data = 'Not found');
//   }
// }

// function loadMoreTrendMoves(event) {
//   const currentPage = event.page;
//   console.log(currentPage);

//   moves
//     .fetchTrendMoves(currentPage)
//     .then(response => {
//       response.page = currentPage;

//       const markup = response.results
//         .map(
//           ({
//             id,
//             poster_path,
//             title,
//             release_date,
//             genre_ids,
//           }) => `<li class="cards__item" id="${id}">
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
//         </li>`
//         )
//         .join('');
//       refs.cardsList.innerHTML = markup;
//     })
//     .catch(error => {
//       Notify.failure(error.message);
//       refs.pagination.classList.add('is-hidden');
//     });
// }
function loadMoreTrendMoves(event) {
  // console.log(event.page);

  if (inputRef.value !== '') {
    fetchSearchMove(inputRef.value, event.page)
      .then(response => {
        console.log(`response.total_results:${response.total_results}`);

        refs.cardsList.innerHTML = '';
        createCard(response);
      })
      .catch(err => Notiflix.Notify.failure(err));
  } else {
    fetchTrendMoves(event.page)
      .then(response => {
        // console.log(`response.total_results:${response.total_results}`);
        options.totalItems = response.total_results;
        refs.cardsList.innerHTML = '';
        createCard(response);
      })
      .catch(err => Notiflix.Notify.failure(err));
  }
}
pagination.on('beforeMove', loadMoreTrendMoves);

// moves
//   .fetchTrendMoves(page)
//   .then(({ results, total }) => {
//     if (results.length === 0) {
//       Notify.warning(`We don\`t find any moves 🤷‍♀️`);
//       return;
//     }

//     pagination.reset(total);
//     const markup = results
//       .map(
//         ({
//           id,
//           poster_path,
//           title,
//           release_date,
//           genre_ids,
//         }) => `<li class="cards__item" id="${id}">
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
//         </li>`
//       )
//       .join('');

//     refs.cardsList.insertAdjacentHTML('beforeend', markup);

//     refs.pagination.classList.remove('is-hidden');
//   })
//   .catch(error => {
//     Notify.failure(error.message);
//   });

// const loadMoreMovesByQuery = event => {
//   const currentPage = event.page;
//   moves
//     .fetchSearchMoves(currentPage)
//     .then(({ results }) => {
//       const markup = results
//         .map(
//           ({
//             id,
//             poster_path,
//             title,
//             release_date,
//             genre_ids,
//           }) => `<li class="cards__item" id="${id}">
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
//         </li>`
//         )
//         .join('');

//       refs.cardsList.innerHTML = markup;
//     })
//     .catch(error => {
//       Notify.failure(error.message);
//     });
// };

// const handleSubmit = event => {
//   event.preventDefault();

//   const {
//     elements: { query },
//   } = event.target;
//   const searchQuery = query.value.trim();
//   // console.log(searchQuery);

//   if (!searchQuery) {
//     Notify.failure('Input query!!!');
//     return;
//   }

//   if (moves.query === searchQuery) {
//     Notify.info('Already show!');
//     return;
//   }

//   moves.query = searchQuery;
//   // console.log(moves.query);

//   refs.cardsList.innerHTML = '';

//   moves
//     .fetchSearchMoves(page)
//     .then(({ results, total }) => {
//       if (results.length === 0) {
//         Notify.warning(`We don\`t find any moves by ${searchQuery} 🤷‍♀️`);
//         refs.pagination.classList.add('is-hidden');
//         return;
//       }

//       pagination.off('beforeMove', loadMoreTrendMoves);
//       pagination.off('beforeMove', loadMoreMovesByQuery);
//       pagination.on('beforeMove', loadMoreMovesByQuery);

//       pagination.reset(total);

//       const markup = results
//         .map(
//           ({
//             id,
//             poster_path,
//             title,
//             release_date,
//             genre_ids,
//           }) => `<li class="cards__item" id="${id}">
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
//         </li>`
//         )
//         .join('');

//       refs.cardsList.insertAdjacentHTML('beforeend', markup);

//       refs.pagination.classList.remove('is-hidden');
//     })
//     .catch(error => {
//       Notify.failure(error.message);
//       refs.pagination.classList.add('is-hidden');
//     });

//   event.target.reset();
// };

// refs.searchForm.addEventListener('submit', handleSubmit);
