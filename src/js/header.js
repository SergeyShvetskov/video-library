import Notiflix from 'notiflix';
// import MovesApiService from './fetchMove';
import { createCard } from './func-create-cadr';
import { fetchSearchMoves2, fetchTrendMoves } from './fetch';
import { currentPage } from './pagination-new';

const axios = require('axios').default;

document.addEventListener('DOMContentLoaded', startPage);
const currentPag = document.querySelector('pagination--current');

const refs = {
  searchForm: document.querySelector('.header-search__wrapper'),
  cardlist: document.querySelector('.cards__list'),
  cardsListLibrary: document.querySelector('.cards__list--library'),
};

refs.searchForm.addEventListener('submit', onSearch);

async function startPage() {
  fetchTrendMoves().then(response => {
    createCard(response);
  })
  .catch(err => err.message);
}

async function onSearch(event) {
  
  event.preventDefault();
  // currentPag.classList.remove('pagination--current');
  const search = event.currentTarget.elements.query.value.trim();
  // console.log(`search=${search}`);
  clear();
  if (search !== '') {
 fetchSearchMoves2(search, 1).then(response => {
      if (response.results.length === 0) {
        console.log('помилка');
        return Notiflix.Notify.failure(
          `Search result not successful. Enter the correct movie name and try again.`
        );
      } else {
        createCard(response);
      }
    })
    .catch(err => err.message);

    
  } else {
    fetchTrendMoves(1).then(response => {
    createCard(response);
  })
  .catch(err => err.message);
}
  }
 



// const movieGalleryFetch = new MovesApiService();

// movieGalleryFetch
//   .fetchTrendMoves()
//   .then(response => {
//     createCard(response);
//   })
//   .catch(err => err.message);

// refs.searchForm.addEventListener('submit', onSearch);

// async function onSearch(event) {
//   event.preventDefault();
//   inputRef = event.currentTarget.elements.query.value.trim();
//   movieGalleryFetch.searchQuery =
//     event.currentTarget.elements.query.value.trim();
//   movieGalleryFetch.resetPage();
//   console.log(movieGalleryFetch.searchQuery);

//   clear();

//   if (movieGalleryFetch.searchQuery === '') {
//     return;
//   }

//   await movieGalleryFetch
//     .fetchSearchMoves()
//     .then(response => {
//       if (response.results.length === 0) {
//         console.lof('помилка');
//         return Notiflix.Notify.failure(
//           `Search result not successful. Enter the correct movie name and try again.`
//         );
//       } else {
//         createCard(response);
//       }
//     })
//     .catch(err => err.message);
// }

//
function clear() {
  refs.cardlist.innerHTML = '';
}
