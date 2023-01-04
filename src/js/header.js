import Notiflix from 'notiflix';
import MovesApiService from './fetchMove';
import {createCard} from './filmCards-home';

const refs = {
    searchForm: document.querySelector('.header-search__wrapper'),
    cardlist: document.querySelector('.cards__list'),
    cardsListLibrary: document.querySelector('.cards__list--library'),
}

const movieGalleryFetch = new MovesApiService();

movieGalleryFetch
    .fetchTrendMoves()
  .then((response) => {createCard(response);  
  }).catch(err => err.message);



refs.searchForm.addEventListener('submit', onSearch);

async function onSearch(event) {
  event.preventDefault();
  
    movieGalleryFetch.searchQuery = event.currentTarget.elements.query.value.trim();
    movieGalleryFetch.resetPage();
    console.log(movieGalleryFetch.searchQuery);
    
    clear();
 
  if (movieGalleryFetch.searchQuery === "") {
    return;
  }
  
  await movieGalleryFetch.fetchSearchMoves()
    .then((response) => {
      if (response.results.length === 0) {
        return Notiflix.Notify.failure(`Search result not successful. Enter the correct movie name and try again.`);
        }        
      else {
          createCard(response);         
      }
         }).catch(err => err.message);
};

// 
function clear() {
    refs.cardlist.innerHTML = "";     
};
