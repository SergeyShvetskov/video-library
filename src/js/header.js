
import Notiflix from 'notiflix';
import FetchData from './FetchMove.js';
import {
  createCard,
  insertMarkup,
  } from './filmCards-home.js';

  const cardsList = document.querySelector('.cards__list');
  const movieGalleryFetch = new FetchData();
  const form = document.querySelector('.header-search__wrapper');
  const input = document.querySelector('.header-search__input');


  
  form.addEventListener('submit', e => {
    e.preventDefault();
    Notiflix.Loading.standard({
      clickToClose: false,
      svgSize: '75px',
    });
    const word = input.value;     
    movieGalleryFetch
      .getSearchData(word)
      .then(response => {
        if (response.data.length == 0) {
          return Notiflix.Notify.failure(`Search result not successful. Enter the correct movie name and try again.`);
        } else {
          Notiflix.Loading.remove(500);
          insertMarkup(createCard(response.data), cardsList);
          // pagination(response);
        }
      })
      .catch(err => {
        console.log('index err');
        console.log(err);
      });
  });
// const refs = {
//     searchForm: document.querySelector('.header-search__wrapper'),
//     cardlist: document.querySelector('.cards__list'),
//     cardsListLibrary: document.querySelector('.cards__list--library'),
// }

// const newsApiService = new NewsApiService();

// refs.searchForm.addEventListener('submit', onSearch);


// async function onSearch(event) {
//   event.preventDefault();
        
//     newsApiService.searchQuery = event.currentTarget.elements.query.value.trim();
//     newsApiService.resetPage();
//     console.log(newsApiService.searchQuery);
    
//     clear();
 
//   if (newsApiService.searchQuery === "") {
//     return;
//   }
  
//   await newsApiService.fetchMoves()
//     .then((response) => {
//       if (response.results.length === 0) {
//         return Notiflix.Notify.failure(`Search result not successful. Enter the correct movie name and try again.`);
//         }
        
//       else {
//           createCard(response);
         
//     }
//          }).catch(err => err.message);
// };


 


// // создание карточки
// function createCard(response) {
//   const card = response.results.map(({ id, poster_path, title, release_date, genre_ids }) => 
//            `<li class="cards__item" id="${id}">
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
//     )
//         .join('');
//     refs.cardlist.insertAdjacentHTML("beforeend", card);
// }

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


// function clear() {
//     refs.cardlist.innerHTML = "";     
// };

