import Notiflix from 'notiflix';
import { API_KEY, COMMON_URL, TRENDING_FilM, SEARCH_FilM } from './refs';
const axios = require('axios').default;
import { totalPagePagination } from './refs';

async function fetchTrendMoves(page = 1) {
  const responseAxios = await axios.get(
    `${COMMON_URL}${TRENDING_FilM}?api_key=${API_KEY}&page=${page}`
  );
  try {
    console.log(`fetch ${responseAxios.data.total_results}`);
    const response = responseAxios.data;
    totalPagePagination = response.total_results;

    return response;
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
}
async function fetchSearchMove(searchQuery, page) {
  const responseAxios = await axios.get(
    `${COMMON_URL}${SEARCH_FilM}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
  );
  try {
    const response = responseAxios.data;
    return response;
  } catch (error) {
    Notiflix.Notify.failure(error);
  }
}

export { fetchTrendMoves, fetchSearchMove };
