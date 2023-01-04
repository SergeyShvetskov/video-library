import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import MovesApiService from './fetchMove';

const refs = {
  cardsListLibrary: document.querySelector('.cards__list--library'),
  cardsList: document.querySelector('.cards__list'),
};

const container = document.getElementById('pagination');

const PER_PAGE = 20;

const moves = new MovesApiService();

const options = {
  totalItems: 1000,
  itemsPerPage: PER_PAGE,
  visiblePages: 5,
  page: 1,
  centerAlign: false,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected" id="current">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(container, options);

const page = pagination.getCurrentPage();

function loadMoreTrendMoves(event) {
  const currentPage = event.page;

  moves.fetchTrendMoves().then(response => {
    response.page = currentPage;

    const markup = function createCard(response) {
      const card = response.results
        .map(
          ({ id, poster_path, title, release_date, genre_ids }) => `<li class="cards__item" id="${id}">
        <a class="cards__link">
            <img class="cards__img" src="https://image.tmdb.org/t/p/w400${poster_path}" alt="${title}" loading="lazy">
        </a>
            <div class="cards__text"><h2 class="cards__name">${getShortName(
              title
            )}</h2>
            <p class="cards__genres"> ${findGenresOfMovie(
              genre_ids
            )} | ${createYear(release_date)}</p>
            </div>
        </li>`
          )
        .join('');
      refs.cardsList.insertAdjacentHTML("beforeend", card);
    };
    refs.cardsList.innerHTML = markup;
  });
}

pagination.on('beforeMove', loadMoreTrendMoves);
