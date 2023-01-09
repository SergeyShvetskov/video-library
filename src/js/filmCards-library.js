import MovesApiService from './fetchMove';
// import createCard from './filmCards-home';
const movieFetch = new MovesApiService();
import { posterNull } from './posterNull';

const refs = {
  watchedBtnLb: document.querySelector('.watchedBtnLb'),
  queueBtnLb: document.querySelector('.queueBtnLb'),
  libraryCardsList: document.querySelector('.library-cards__list'),
  modalWindow: document.querySelector('[data-modal'),
  movieList: document.querySelector('#card-list'),
};

refs.watchedBtnLb.addEventListener('click', onWatchedBtnLbClick);
refs.queueBtnLb.addEventListener('click', onQueueBtnClick);
window.addEventListener('load', onWatchedBtnLbClick);
refs.movieList.addEventListener('click', onClickLibCard);
function onClickLibCard(e) {
  if (!refs.modalWindow.classList.contains('is-hidden')) {
    // console.log('MODAL-OPEN');
    document.addEventListener('click', updateCardList);

    function updateCardList(e) {
      // console.log(e.target);
      switch (e.target.className) {
        case 'modal-form-watched-bnt add-watched':
          createWatchedList();
          break;

        case 'modal-form-watched-bnt remove-watched':
          createWatchedList();
          break;

        case 'modal-form-queue-bnt add-queue':
          createQueueList();
          break;

        case 'modal-form-queue-bnt remove-queue':
          createQueueList();
          break;

        default:
      }
    }
  }
}

function onWatchedBtnLbClick(e) {
  refs.queueBtnLb.style.backgroundColor = 'transparent';
  refs.queueBtnLb.style.border = '1px solid #FFFFFF';
  refs.watchedBtnLb.style.backgroundColor = '#ff6b01';
  refs.watchedBtnLb.style.border = '1px solid #ff6b01';
  //   createWathedGalery();
  createWatchedList();
}

function onQueueBtnClick(e) {
  refs.watchedBtnLb.style.backgroundColor = 'transparent';
  refs.watchedBtnLb.style.border = '1px solid #FFFFFF';
  refs.queueBtnLb.style.backgroundColor = '#ff6b01';
  refs.queueBtnLb.style.border = '1px solid #ff6b01';

  createQueueList();
}

function createWatchedList() {
  refs.libraryCardsList.innerHTML = '';

  // if (!(localStorage.getItem('idWatched'))) {return}
  // const idWatchedArray = JSON.parse((localStorage.getItem('idWatched')))
  // // console.log(idWatchedArray)
  // // for (let j = 0; i < idWatchedArray.length; j += 1)
  // for (let i in idWatchedArray) {
  // console.log(j, idWatchedArray[j])
  // }

  for (let i = 0; i < localStorage.length; i += 1) {
    // console.log(localStorage.length);
    if (localStorage.key(i).includes('watched')) {
      // console.log(localStorage.getItem(localStorage.key(i)));
      let movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      createCard(movie);
    }
  }
}

function createQueueList() {
  refs.libraryCardsList.innerHTML = '';

  for (let i = 0; i < localStorage.length; i += 1) {
    // console.log(localStorage.length);
    if (localStorage.key(i).includes('queue')) {
      // console.log(localStorage.getItem(localStorage.key(i)));
      let movie = JSON.parse(localStorage.getItem(localStorage.key(i)));
      createCard(movie);
    }
  }

  // if (!localStorage.getItem('idQueue')) {
  //   return;
  // }
  // const idQueueArray = JSON.parse(localStorage.getItem('idQueue'));
  // // console.log(idQueueArray)
  // // for (let j = 0; i < idQueueArray.length; j += 1)
  // for (let i in idQueueArray) {
  // console.log(j, idQueueArray[j])
  // }

  // for (let i = 0; i < localStorage.length; i += 1) {
  // console.log(localStorage.length);
  // if (localStorage.key(i).includes('queue')) {
  // console.log(localStorage.getItem(localStorage.key(i)));
  // const movieId = JSON.parse(localStorage.getItem(localStorage.key(i)));
  // movieFetch.id = movieId;
  // movieFetch.id = idQueueArray[i];
  // movieFetch
  //   .fetchMoviesInfo()
  //   .then(
  //     ({
  //       genres,
  //       id,
  //       original_title,
  //       poster_path,
  //       release_date,
  //       vote_average,
  //     }) => {
  //       createCard({
  //         genres,
  //         id,
  //         original_title,
  //         poster_path,
  //         release_date,
  //         vote_average,
  //       });
  //     }
  //   );
  // }
  // }
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
              <img class="cards__img" src="${posterNull(
                poster_path
              )}" alt="${original_title}" loading="lazy">
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
    return showGanres(array);
  }
}

function showGanres(array) {
  array.map(item => item.name).join(', ');
}

function createYear(data) {
  if (data) {
    return data.slice(0, 4);
  } else {
    return (data = 'Not found');
  }
}
