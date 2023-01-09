import Notiflix from 'notiflix';
import { API_KEY, COMMON_URL, TRENDING_FilM, SEARCH_FilM } from './refs';
const axios = require('axios').default;
import { totalPagePagination } from './refs';
// let totalPagePagination2 = '10000';

async function fetchTrendMoves(page = 1) {
  const responseAxios = await axios.get(
    `${COMMON_URL}${TRENDING_FilM}?api_key=${API_KEY}&page=${page}`
  );
  try {
    const response = responseAxios.data;
    totalPagePagination = response.total_results;
    console.log(response.total_results);

    return response;
  } catch (error) {
    Notiflix.Notify.failure(error);
    //   console.error(error);
  }
}
async function fetchSearchMove(searchQuery, page) {
  //   console.log(`Працює fetchSearchMove `);
  const responseAxios = await axios.get(
    `${COMMON_URL}${SEARCH_FilM}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
  );
  try {
    const response = responseAxios.data;
    totalPagePagination = response.total_results;
    console.log(response.total_results);

    return response;
  } catch (error) {
    Notiflix.Notify.failure(error);
    console.error(error);
  }
}

export { fetchTrendMoves, fetchSearchMove, totalPagePagination2 };
