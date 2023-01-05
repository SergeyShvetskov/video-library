import MovesApiService from './fetchMove';
import { createCard, findGenresOfMovie, refs } from './filmCards-home';

const modal = document.querySelector("[data-modal]");
const movieInfoFetch = new MovesApiService();

refs.cardsList.addEventListener('click', onClickCard);

function onClickCard(e) {
  movieInfoFetch.id = e.path[2].id;
  localStorage.setItem(`id-movie`, movieInfoFetch.id);

  if (e.path[2]) {
    modal.classList.remove('is-hidden');
    movieInfoFetch.fetchMoviesInfo().then(data => {
     createModal(data);
    })
  }
}
function createModal({ id, poster_path, title, vote_count, vote_average, popularity, original_title, genres, description, overview }) {
  let genresToStr = genres.map(x => x.name).join(', ');
  const modalMovie = `<div class="modal-window" id="${id}">
    <button type="button" class="modal-close-btn button" data-modal-close>
      <svg class="modal-close-btn-icon" width="30" height="30">
        <path d="M23.734 10.304l-1.504-1.504-5.963 5.962-5.962-5.962-1.504 1.504 5.962 5.962-5.962 5.963 1.504 1.504 5.962-5.963 5.963 5.963 1.504-1.504-5.963-5.963 5.963-5.962z"></path>
      </svg>
    </button>
    <img
      class="modal-movie-img"
      src="https://image.tmdb.org/t/p/w400${poster_path}"
      alt="${title}"
    />
    <div modal-tab-container>
      <h2 class="modal-movie-title">${title}</h2>
      <table>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-votes">Vote / Votes</td>
          <td class="modal-movie-data">${vote_average} / ${vote_count}</td>
        </tr>
        <tr class="modal-row">
          <td class="modal-movie-desc modal-movie-popularity">Popularity</td>
          <td class="modal-movie-data">${popularity}</td>
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

  modal.insertAdjacentHTML('beforeend', modalMovie);
}



document.addEventListener('keydown', closeModalEsc);
document.addEventListener('click', closeModalClick);
document.addEventListener('click', closeModalBtnClick);


function closeModalClick(e) {
  if (e.target === modal) {
    modal.classList.add('is-hidden');
    localStorage.removeItem('id-movie');
  }
}

function closeModalEsc(e) {
  if (e.keyCode === 27) {
    modal.classList.add('is-hidden');
    localStorage.removeItem('id-movie');
  }
}

function closeModalBtnClick(e) {
  console.log(e);
  // modal.classList.add('is-hidden');
  //   localStorage.removeItem('id-movie');

}

export { modal };
