import { API_KEY,
  COMMON_URL,
  TRENDING_FilM,
  SEARCH_FilM, 
  MOVIES_INFO, 
  inputRef,
  cardList} from './refs';
import allGenres from './genres.json'
const axios = require('axios').default;


const btn1Ref = document.querySelector('[data-index="1"]');
const btn2Ref = document.querySelector('[data-index="2"]');
const btn3Ref = document.querySelector('[data-index="3"]');
const btn4Ref = document.querySelector('[data-index="4"]');
const btn5Ref = document.querySelector('[data-index="5"]');
const firstPageRef = document.querySelector('.first-button');
const lastPageRef = document.querySelector('.last-button');
const paginationRef = document.querySelector('.pagination-container');
const rightArrowRef = document.querySelector('.arrow-right');
const leftArrowRef = document.querySelector('.arrow-left');
const prevDotsRef = document.querySelector('#previous');
const afterDotsRef = document.querySelector('#after');

paginationRef.addEventListener('click', onPaginationClick);

let currentPage = 1;

let btns = document.querySelectorAll('.pagination-button');

prevDotsRef.hidden = true;
leftArrowRef.hidden = true;
firstPageRef.hidden = true;

function onPaginationClick(event) {
  console.log(event);
  if (event.target.tagName === 'BUTTON') {
    if (Number(event.target.textContent)) {
      currentPage = Number(event.target.textContent);
    }

    prevDotsRef.hidden = true;
    afterDotsRef.hidden = true;

    if (event.target.classList.contains('pagination-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      event.target.classList.add('pagination--current');
    }

    if (event.target.classList.contains('arrow-right') && currentPage < 1000) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.classList.add('pagination--current');
      btn1Ref.textContent = Number(btn1Ref.textContent) + 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) + 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) + 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) + 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) + 5;
      currentPage = btn1Ref.textContent;
    }

    if (event.target.classList.contains('arrow-left') && currentPage >= 5) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(btn1Ref.textContent) - 5;
      btn2Ref.textContent = Number(btn2Ref.textContent) - 5;
      btn3Ref.textContent = Number(btn3Ref.textContent) - 5;
      btn4Ref.textContent = Number(btn4Ref.textContent) - 5;
      btn5Ref.textContent = Number(btn5Ref.textContent) - 5;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
    }

    if (event.target.classList.contains('first-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = 1;
      btn2Ref.textContent = 2;
      btn3Ref.textContent = 3;
      btn4Ref.textContent = 4;
      btn5Ref.textContent = 5;
      btn1Ref.classList.add('pagination--current');
      currentPage = btn1Ref.textContent;
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (event.target.classList.contains('last-button')) {
      btns.forEach(el => el.classList.remove('pagination--current'));
      btn1Ref.textContent = Number(lastPageRef.textContent) - 4;
      btn2Ref.textContent = Number(lastPageRef.textContent) - 3;
      btn3Ref.textContent = Number(lastPageRef.textContent) - 2;
      btn4Ref.textContent = Number(lastPageRef.textContent) - 1;
      btn5Ref.textContent = lastPageRef.textContent;
      btn5Ref.classList.add('pagination--current');
      currentPage = btn5Ref.textContent;
      rightArrowRef.hidden = true;
      afterDotsRef.hidden = true;
      lastPageRef.hidden = true;
    }

    if (Number(currentPage) > 5) {
      leftArrowRef.hidden = false;
      prevDotsRef.hidden = false;
      firstPageRef.hidden = false;
    } else {
      leftArrowRef.hidden = true;
      prevDotsRef.hidden = true;
      firstPageRef.hidden = true;
    }

    if (Number(currentPage) < 996) {
      rightArrowRef.hidden = false;
      afterDotsRef.hidden = false;
      lastPageRef.hidden = false;
    }

    cardList.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });


  API_KEY = 'a79202f0028fac6a27982a88fb1459a6';
  COMMON_URL = 'https://api.themoviedb.org/3/';
  //   TRENDING_FilM = 'trending/all/day';
  TRENDING_FilM = 'movie/popular';
  SEARCH_FilM = 'search/movie';
  MOVIES_INFO = 'movie/';



    if (inputRef.value !== '' ) {
      console.log(inputRef.value, currentPage);
      console.log(`намагаюся зробити картки currentPage=${currentPage}`);
        fetchSearchMoves2(inputRef.value, currentPage)
  .then(response => {
    console.log('намагаюсь створити картки');
    createCard(response)
    console.log('картки відпрацювали');

  })
  .catch(err => err.message);
     
    } else {
      console.log('інакше роблю стартову сторінку');

      //   startPage();
    }
  }
}

// let pageSize = 9;

// function defineResultsPerPage() {
//   if (window.innerWidth >= 1280) {
//     pageSize = 9;
//   } else if (window.innerWidth >= 768 && window.innerWidth < 1280) {
//     pageSize = 8;
//   } else if (window.innerWidth < 768) {
//     pageSize = 4;
//   }
//   return pageSize;
// }

export { currentPage };






//------------------------------------------------



// export default class MovesApiService {
//   API_KEY = 'a79202f0028fac6a27982a88fb1459a6';
//   COMMON_URL = 'https://api.themoviedb.org/3/';
//   //   TRENDING_FilM = 'trending/all/day';
//   TRENDING_FilM = 'movie/popular';
//   SEARCH_FilM = 'search/movie';
//   MOVIES_INFO = 'movie/';

//   constructor() {
//     this.searchQuery = '';
//     this.page = 1;
//     this.id = '';
//   }

//   async fetchMoviesInfo() {
//     const responseAxios = await axios.get(
//       `${this.COMMON_URL}${this.MOVIES_INFO}${this.id}?api_key=${this.API_KEY}`
//     );
//     try {
//       const response = responseAxios.data;
//       // console.log(response);
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchTrendMoves() {
//     const responseAxios = await axios.get(
//       `${this.COMMON_URL}${this.TRENDING_FilM}?api_key=${this.API_KEY}&page=${this.page}`
//     );
//     try {
//       // console.log(responseAxios);
//       const response = responseAxios.data;
//       this.page += 1;
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async fetchSearchMoves() {
//     const responseAxios = await axios.get(
//       `${this.COMMON_URL}${this.SEARCH_FilM}?api_key=${this.API_KEY}&query=${this.searchQuery}&page=${this.page}`
//     );
//     try {
//       console.log(responseAxios);
//       const response = responseAxios.data;
//       this.page += 1;
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   get query() {
//     return this.searchQuery;
//   }
//   set query(newQuery) {
//     this.searchQuery = newQuery;
//   }

//   resetPage() {
//     this.page = 1;
//   }
// }


//-----------------створення карток

function createCard(response) {
  console.log('роблю картки createCard2');
  console.log(response.results);
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
   console.log('передаю картки на розмітку');
  cardList.insertAdjacentHTML('beforeend', card);
}

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
    return (movieGenres = '...');
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



//отображение года выпуска
function createYear(data) {
  if (data) {
    return data.slice(0, 4);
  } else {
    return (data = 'Not found');
  }
}


 async function fetchSearchMoves2(searchQuery, page) {
    const responseAxios = await axios.get(
      `${this.COMMON_URL}${SEARCH_FilM}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
    );
    try {
      console.log(responseAxios);
      const response = responseAxios.data;
      // this.page += 1;
      return response;
    } catch (error) {
      console.error(error);
    }
  }