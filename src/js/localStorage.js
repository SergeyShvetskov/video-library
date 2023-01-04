import MovesApiService from './fetchMove';
// import idMovie from './filmCards-home';

const refs = {
  watchedBtn: document.querySelector('.modal-form-watched-bnt'),
  queueBtn: document.querySelector('.modal-form-queue-bnt'),
};

// refs.watchedBtn.addEventListener('click', addToWatchedList);
// refs.queueBtn.addEventListener('click', addToQueueList);

const movieGalleryFetch = new MovesApiService();

function addToWatchedList(e) {
  console.log('CLICK WATCHED');
  //   console.log(e);
  console.log(idMovie);
  //   movieGalleryFetch.fetchMoviesInfo().then(data => console.log(data));
}

function addToQueueList(e) {
  console.log('CLICK QUEUE');
}
