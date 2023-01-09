import Notiflix from 'notiflix';
import MovesApiService from './fetchMove';
import { createCard, findGenresOfMovie, refs } from './filmCards-home';
import { posterNull } from './posterNull';

const movieList = document.querySelector('#card-list');
const modal = document.querySelector('[data-modal]');
const modalBox = document.querySelector('.modal-box');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const movieInfoFetch = new MovesApiService();

movieList.addEventListener('click', onClickCard);

function onClickCard(e) {
  document.addEventListener('keydown', closeModalEsc);
  document.addEventListener('click', closeModalClick);
  modalCloseBtn.addEventListener('click', closeModalBtnClick);

  movieInfoFetch.id = e.path[2].id;
  localStorage.setItem(`id-movie`, movieInfoFetch.id);

  if (
    e.path[2].id !== '' &&
    e.path[2].id !== null &&
    e.path[2].id !== undefined
  ) {
    document.body.style.overflow = 'hidden';
    // console.log(e.path[2].id);

    modal.classList.remove('is-hidden');
    movieList.removeEventListener('click', onClickCard);
    movieInfoFetch
      .fetchMoviesInfo()
      .then(data => {
        createModal(data);
        createMovieInfo(data);
        const BtnWatched = document.querySelector('.modal-form-watched-bnt');
        const BtnQueue = document.querySelector('.modal-form-queue-bnt');
        if (localStorage.getItem(`watched-${movieInfoFetch.id}`)) {
          // console.log('yes');
          BtnWatched.style.backgroundColor = '#ff6b01';
          BtnWatched.classList.add('remove-watched');
          BtnWatched.textContent = 'remove from watched';
        } else {
          // console.log('no');
          BtnWatched.style.backgroundColor = '#ffffff';
          BtnWatched.classList.add('add-watched');
          BtnWatched.textContent = 'add to watched';
        }
        if (localStorage.getItem(`queue-${movieInfoFetch.id}`)) {
          // console.log('yes');
          BtnQueue.style.backgroundColor = '#ff6b01';
          BtnQueue.classList.add('remove-queue');
          BtnQueue.textContent = 'remove from queue';
        } else {
          // console.log('no');
          BtnQueue.style.backgroundColor = '#ffffff';
          BtnQueue.classList.add('add-queue');
          BtnQueue.textContent = 'add to queue';
        }
      })
      .catch(error => {
        // console.log(error);
      });
  }
}

function createMovieInfo({
  genres,
  id,
  original_title,
  poster_path,
  release_date,
  vote_average,
}) {
  const movie = {
    genres,
    id,
    original_title,
    poster_path,
    release_date,
    vote_average,
  };
  localStorage.setItem(`movie-info`, JSON.stringify(movie));
}
function createModal({
  id,
  poster_path,
  title,
  vote_count,
  vote_average,
  popularity,
  original_title,
  genres,
  description,
  overview,
}) {
  let genresToStr = genres.map(x => x.name).join(', ');

  const modalMovie = `<div class="modal-js" id="${id}">
    <img
      class="modal-movie-img"
      src="${posterNull(poster_path)}"
      alt="${title}"
    />
    <div>
      <h2 class="modal-movie-title">${title}</h2>
      <table>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-votes">Vote / Votes</td>
          <td class="modal-movie-data"><span class="modal-votes">${vote_average.toFixed(1)}</span> / ${vote_count}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-popularity">Popularity</td>
          <td class="modal-movie-data">${Math.round(popularity)}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-original-title">Original title</td>
          <td class="modal-movie-data">${original_title}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-genre">Genre</td>
          <td class="modal-movie-data">${genresToStr}</td>
        </tr>
      </table>

      <h4 class="modal-movie-about-title">About</h4>
      <p class="modal-movie-description">${overview}</p>
      <div class="modal-btns">
      <button type="button" class="modal-form-watched-bnt">
        Add to watched
      </button>
      <button type="button" class="modal-form-queue-bnt">Add to queue</button>
    </div>
    </div>
  </div>`;

  modalBox.innerHTML = modalMovie;
}

function closeModalClick(e) {
  movieList.addEventListener('click', onClickCard);
  if (e.target === modal) {
    modal.classList.add('is-hidden');
    localStorage.removeItem('id-movie');
    localStorage.removeItem('movie-info');
    document.removeEventListener('click', closeModalClick);
    document.removeEventListener('keydown', closeModalEsc);
    modalCloseBtn.removeEventListener('click', closeModalBtnClick);

    document.body.style.overflow = '';
  }

   //else if (e.path[2].classList.value === 'modal-close-btn') {
  // else if (e.target === modalCloseBtn) { 
  // modal.classList.add('is-hidden');
  //   localStorage.removeItem('id-movie');
  //   localStorage.removeItem('movie-info');
  //   document.removeEventListener('click', closeModalClick);
  //   document.removeEventListener('keydown', closeModalEsc);
  //   document.body.style.overflow = '';
  //}
  // console.log(e.target.className);

  
  switch (e.target.className) {
    case 'modal-form-watched-bnt add-watched':
      createWatchedInfo();
      break;

    case 'modal-form-watched-bnt remove-watched':
      removeWatchedInfo();
      break;

    case 'modal-form-queue-bnt add-queue':
      createQueueInfo();
      break;

    case 'modal-form-queue-bnt remove-queue':
      removeQueueInfo();
      break;

    default:
  }
}

 function closeModalBtnClick() {
    modal.classList.add('is-hidden');
    localStorage.removeItem('id-movie');
    localStorage.removeItem('movie-info');
    document.removeEventListener('click', closeModalClick);
    document.removeEventListener('keydown', closeModalEsc);
    modalCloseBtn.removeEventListener('click', closeModalBtnClick);
    document.body.style.overflow = '';
  }



function closeModalEsc(e) {
  movieList.addEventListener('click', onClickCard);
  if (e.keyCode === 27) {
    modal.classList.add('is-hidden');
    localStorage.removeItem('id-movie');
    localStorage.removeItem('movie-info');
    document.removeEventListener('keydown', closeModalEsc);
    document.removeEventListener('click', closeModalClick);
    modalCloseBtn.removeEventListener('click', closeModalBtnClick);
    document.body.style.overflow = '';
  }
}

function createWatchedInfo() {
  // console.log('clickAddWatched');
  const BtnAddWatched = document.querySelector('.add-watched');
  BtnAddWatched.style.backgroundColor = '#ff6b01';
  BtnAddWatched.style.border = 'none';
  BtnAddWatched.textContent = 'remove from watched';

  movieInfoFetch.id = localStorage.getItem('id-movie');
  // console.log(movieInfoFetch.id);

  const jsonFilmInfo = localStorage.getItem('movie-info');
  localStorage.setItem(`watched-${movieInfoFetch.id}`, jsonFilmInfo);

  BtnAddWatched.classList.add('remove-watched');
  BtnAddWatched.classList.remove('add-watched');
  // if (localStorage.getItem(`watched-${movieInfoFetch.id}`)) {
  //   console.log('yes');
  // } else {}

  // if (!localStorage.getItem('idWatched')) {
  //   let idWatched = [];
  //   idWatched.push(movieInfoFetch.id);
  //   console.log('idWatched', idWatched);
  //   const jsonIdWatched = JSON.stringify(idWatched);
  //   localStorage.setItem(`idWatched`, jsonIdWatched);
  // } else {
  //   let idWatchedInfo = JSON.parse(localStorage.getItem(`idWatched`));
  //   console.log(idWatchedInfo);
  //   if (idWatchedInfo.includes(movieInfoFetch.id)) {
  //     return;
  //   }
  //   idWatchedInfo.push(movieInfoFetch.id);
  //   localStorage.setItem(`idWatched`, JSON.stringify(idWatchedInfo));
  // }
}
function removeWatchedInfo() {
  // console.log('clickRemoveWatched');
  const BtnRemWatched = document.querySelector('.remove-watched');
  BtnRemWatched.style.backgroundColor = '#ffffff';
  BtnRemWatched.style.color = '#000000';
  BtnRemWatched.style.border = '1px solid #000000';
  BtnRemWatched.textContent = 'add to watched';

  movieInfoFetch.id = localStorage.getItem('id-movie');
  // console.log(movieInfoFetch.id);

  // const jsonFilmInfo = localStorage.getItem('movie-info');
  localStorage.removeItem(`watched-${movieInfoFetch.id}`);

  BtnRemWatched.classList.add('add-watched');
  BtnRemWatched.classList.remove('remove-watched');
}

function createQueueInfo() {
  // console.log('clickAddQueue');
  const BtnAddQueue = document.querySelector('.add-queue');
  BtnAddQueue.style.backgroundColor = '#ff6b01';
  BtnAddQueue.style.border = 'none';
  BtnAddQueue.textContent = 'remove from queue';

  movieInfoFetch.id = localStorage.getItem('id-movie');
  // console.log(movieInfoFetch.id);

  const jsonFilmInfo = localStorage.getItem('movie-info');
  localStorage.setItem(`queue-${movieInfoFetch.id}`, jsonFilmInfo);

  BtnAddQueue.classList.add('remove-queue');
  BtnAddQueue.classList.remove('add-queue');
  // console.log('clickQueueBtn');
  // movieInfoFetch.id = localStorage.getItem('id-movie');
  // console.log(movieInfoFetch.id);
  // const jsonFilmInfo = JSON.stringify(movie - info);
  // localStorage.setItem(`queue-${movieInfoFetch.id}`, jsonFilmInfo);

  // if (!localStorage.getItem('idQueue')) {
  //   let idQueue = [];
  //   idQueue.push(movieInfoFetch.id);
  //   console.log('idQueue', idQueue);
  //   const jsonIdQueue = JSON.stringify(idQueue);
  //   localStorage.setItem(`idQueue`, jsonIdQueue);
  // } else {
  //   let idQueueInfo = JSON.parse(localStorage.getItem(`idQueue`));
  //   console.log(idQueueInfo);
  //   if (idQueueInfo.includes(movieInfoFetch.id)) {
  //     return;
  //   }
  //   idQueueInfo.push(movieInfoFetch.id);
  //   localStorage.setItem(`idQueue`, JSON.stringify(idQueueInfo));
  // }
}
function removeQueueInfo() {
  // console.log('clickRemoveQueue');
  const BtnRemQueue = document.querySelector('.remove-queue');
  BtnRemQueue.style.backgroundColor = '#ffffff';
  BtnRemQueue.style.color = '#000000';
  BtnRemQueue.style.border = '1px solid #000000';
  BtnRemQueue.textContent = 'add to queue';

  movieInfoFetch.id = localStorage.getItem('id-movie');
  // console.log(movieInfoFetch.id);

  // const jsonFilmInfo = localStorage.getItem('movie-info');
  localStorage.removeItem(`queue-${movieInfoFetch.id}`);

  BtnRemQueue.classList.add('add-queue');
  BtnRemQueue.classList.remove('remove-queue');
}
export { modal };
