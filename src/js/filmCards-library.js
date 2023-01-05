import MovesApiService from './fetchMove';
// import createCard from './filmCards-home';
const movieFetch = new MovesApiService();

const refs = {
  watchedBtnLb: document.querySelector('.watchedBtnLb'),
  queueBtnLb: document.querySelector('.queueBtnLb'),
  libraryCardsList: document.querySelector('.library-cards__list'),
};

refs.watchedBtnLb.addEventListener('click', onWatchedBtnLbClick);
refs.queueBtnLb.addEventListener('click', onQueueBtnClick);

function onWatchedBtnLbClick(e) {
  console.log('click lib');
  //   createWathedGalery();
  createWatchedList();
}

function onQueueBtnClick(e) {
  createQueueList();
}

function createWatchedList() {
  refs.libraryCardsList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i += 1) {
    // console.log(localStorage.length);
    if (localStorage.key(i).includes('watched')) {
      // console.log(localStorage.getItem(localStorage.key(i)));
      const movieId = JSON.parse(localStorage.getItem(localStorage.key(i)));
      movieFetch.id = movieId;
      movieFetch
        .fetchMoviesInfo()
        .then(
          ({
            genres,
            id,
            original_title,
            poster_path,
            release_date,
            vote_average,
          }) => {
            createCard({
              genres,
              id,
              original_title,
              poster_path,
              release_date,
              vote_average,
            });
          }
        );
    }
  }
}

function createQueueList() {
  refs.libraryCardsList.innerHTML = '';
  for (let i = 0; i < localStorage.length; i += 1) {
    // console.log(localStorage.length);
    if (localStorage.key(i).includes('queue')) {
      // console.log(localStorage.getItem(localStorage.key(i)));
      const movieId = JSON.parse(localStorage.getItem(localStorage.key(i)));
      movieFetch.id = movieId;
      movieFetch
        .fetchMoviesInfo()
        .then(
          ({
            genres,
            id,
            original_title,
            poster_path,
            release_date,
            vote_average,
          }) => {
            createCard({
              genres,
              id,
              original_title,
              poster_path,
              release_date,
              vote_average,
            });
          }
        );
    }
  }
}

function createCard({
  genres,
  id,
  original_title,
  poster_path,
  release_date,
  vote_average,
}) {
  const card = `<li class="cards__item" id="${id}">
          <a class="cards__link">
              <img class="cards__img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${original_title}" loading="lazy">
          </a>
              <div class="cards__text"><h2 class="cards__name">${getShortName(
                original_title
              )}</h2>
              <p class="cards__genres"> ${changeGanres(genres)} | ${createYear(
    release_date
  )}<span class="film-rating"> ${vote_average.toFixed(1)}</span>
              </p>
              </div>
          </li>`;

  refs.libraryCardsList.insertAdjacentHTML('beforeend', card);
}

function getShortName(string) {
  if (string) {
    if (string.length > 32) {
      return string.slice(0, 32) + '...';
    }
    return string;
  }
}

function changeGanres(array) {
  if (array.length > 2) {
    return `${array[0].name}, ${array[1].name}, other`;
  } else {
    return `${array[0].name}, ${array[1].name}`;
  }
}

function createYear(data) {
  if (data) {
    return data.slice(0, 4);
  } else {
    return (data = 'Not found');
  }
}
