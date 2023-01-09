import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';
// import MovesApiService from './fetchMove';
import allGenres from './genres.json';
import { Notify } from 'notiflix';
import Notiflix from 'notiflix';
import { fetchSearchMove, totalPagePagination2 } from './fetch';
import { createCard } from './func-create-cadr';
import { inputRef, totalPagePagination } from './refs';

import { API_KEY, COMMON_URL, TRENDING_FilM, SEARCH_FilM } from './refs';
const axios = require('axios').default;

const refs = {
  cardsListLibrary: document.querySelector('.cards__list--library'),
  cardsList: document.querySelector('.cards__list'),
  pagination: document.querySelector('.tui-pagination'),
  searchForm: document.querySelector('.header-search__wrapper'),
};

refs.searchForm.addEventListener('submit', onSubmit);

const container = document.getElementById('pagination');

const itemsPerPage = 20;
// const totalItems = 100;
console.log(totalPagePagination);
const options = {
  totalItems: 1,
  itemsPerPage: itemsPerPage,
  visiblePages: 5,
  page: 1,
  centerAlign: true,
  firstItemClassName: 'tui-first-child',
  lastItemClassName: 'tui-last-child',
  template: {
    page: '<div href="#" class="tui-page-btn">{{page}}</div>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected" id="current">{{page}}</strong>',
    moveButton:
      '<div href="#" class="tui-page-btn tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</div>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<div href="#" class="tui-page-btn tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</div>',
  },
};

function onSubmit(event) {
  // pagination.on('beforeMove', loadMoreTrendMoves);
  // pagination.reset();
}

const pagination = new Pagination(container, options);

function loadMoreTrendMoves(event) {
  // console.log(event.page);

  if (inputRef.value !== '') {
    fetchSearchMove(inputRef.value, event.page)
      .then(response => {
        console.log(
          `response.total_results:${response.total_results} event.page ${event.page}`
        );
        refs.cardsList.innerHTML = '';
        createCard(response);
        if (event.page === 1) pagination.reset(response.total_results);
      })
      .catch(err => Notiflix.Notify.failure(err));
  } else {
    fetchTrendMoves(event.page)
      .then(response => {
        console.log(
          ` fetchTrendMoves response.total_results:${response.total_results} event.page ${event.page}`
        );
        refs.cardsList.innerHTML = '';
        createCard(response);
        if (event.page === 1) pagination.reset(response.total_results);
      })
      .catch(err => Notiflix.Notify.failure(err));
  }
}

pagination.on('afterMove', loadMoreTrendMoves);

async function fetchTrendMoves(page = 1) {
  const responseAxios = await axios.get(
    `${COMMON_URL}${TRENDING_FilM}?api_key=${API_KEY}&page=${page}`
  );
  try {
    console.log(responseAxios.data.total_results);
    const response = responseAxios.data;
    totalPagePagination = response.total_results;
    console.log(response.total_results);

    return response;
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
}
