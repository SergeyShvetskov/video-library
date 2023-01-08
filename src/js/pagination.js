import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
import MovesApiService from './fetchMove';
import allGenres from './genres.json';

const refs = {
  cardsListLibrary: document.querySelector('.cards__list--library'),
  cardsList: document.querySelector('.cards__list'),
};

const container = document.getElementById('pagination');

const itemsPerPage = 20;

const moves = new MovesApiService();

const options = {
  totalItems: 1000,
  itemsPerPage: itemsPerPage,
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
  console.log(currentPage);

  moves.fetchTrendMoves().then(response => {
    response.page = currentPage;
    function getShortName(string) {
      if (string) {
        if (string.length >= 32) {
          return string.substr(0, 32) + '...';
        }
        return string;
      }
    }
    const { genres } = allGenres;
    function findGenresOfMovie(ids) {
      const arr = ids.flatMap(id =>
        genres.filter(element => element.id === id)
      );
      let movieGenres = arr.map(el => el.name);
      if (movieGenres.length > 2) {
        const removedGenres = movieGenres.splice(0, 2);
        removedGenres.push('Other');

        return removedGenres.join(', ');
      }
      if (movieGenres.length === 0) {
        return (movieGenres = 'Not found');
      }
      return movieGenres.join(', ');
    }
    function createYear(data) {
      if (data) {
        return data.slice(0, 4);
      } else {
        return (data = 'Not found');
      }
    }

    const markup = response.results
      .map(
        ({
          id,
          poster_path,
          title,
          release_date,
          genre_ids,
        }) => `<li class="cards__item" id="${id}">
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
    refs.cardsList.innerHTML = markup;
  });
}

pagination.on('beforeMove', loadMoreTrendMoves);
