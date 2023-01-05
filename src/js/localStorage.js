import MovesApiService from './fetchMove';
// import idMovie from './filmCards-home';

const refs = {
  watchedBtn: document.querySelector('.modal-form-watched-bnt'),
  queueBtn: document.querySelector('.modal-form-queue-bnt'),
};

// refs.watchedBtn.addEventListener('click', addToWatchedList);
// refs.queueBtn.addEventListener('click', addToQueueList);

const movieInfoFetch = new MovesApiService();

function addToWatchedList(e) {
  console.log('CLICK WATCHED');
  movieInfoFetch.id = localStorage.getItem('id-movie');
  console.log(movieInfoFetch.id);
  movieInfoFetch
    .fetchMoviesInfo()
    .then(
      ({
        genres,
        id,
        original_title,
        overview,
        popularity,
        poster_path,
        relise_date,
        vote_avarege,
        vote_count,
      }) => {
        const jsonFilmInfo = JSON.stringify({
          genres,
          id,
          original_title,
          overview,
          popularity,
          poster_path,
          relise_date,
          vote_avarege,
          vote_count,
        });
        localStorage.setItem(`watched-${id}`, jsonFilmInfo);
      }
    );
}

function addToQueueList(e) {
  console.log('CLICK QUEUE');
  console.log('CLICK WATCHED');
  movieInfoFetch.id = localStorage.getItem('id-movie');
  console.log(movieInfoFetch.id);
  movieInfoFetch
    .fetchMoviesInfo()
    .then(
      ({
        genres,
        id,
        original_title,
        overview,
        popularity,
        poster_path,
        relise_date,
        vote_avarege,
        vote_count,
      }) => {
        const jsonFilmInfo = JSON.stringify({
          genres,
          id,
          original_title,
          overview,
          popularity,
          poster_path,
          relise_date,
          vote_avarege,
          vote_count,
        });
        localStorage.setItem(`queue-${id}`, jsonFilmInfo);
      }
    );
}
