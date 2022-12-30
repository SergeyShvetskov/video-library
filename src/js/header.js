
import Notiflix from 'notiflix';
import NewsApiService from './fetchMove';




const refs = {
    searchForm: document.querySelector('.header-search__wrapper')
}

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);


async function onSearch(event) {
  event.preventDefault();
        
  newsApiService.searchQuery = event.currentTarget.elements.query.value.trim();
  newsApiService.resetPage();
  console.log(newsApiService.searchQuery);


 
  if (newsApiService.searchQuery === "") {
    return;
  }
  
  await newsApiService.fetchMoves()
    .then((response) => {
      if (response.results.length === 0) {
        return Notiflix.Notify.failure(`Sorry, there are no moves matching your search query. Please try again.`);
              }
         }).catch(err => err.message);
}; 
 

