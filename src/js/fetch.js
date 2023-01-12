import Notiflix from 'notiflix';
import { API_KEY, COMMON_URL, TRENDING_FilM, SEARCH_FilM } from './refs';
const axios = require('axios').default;

async function fetchTrendMoves(page = 1) {
  const responseAxios = await axios.get(
    `${COMMON_URL}${TRENDING_FilM}?api_key=${API_KEY}&page=${page}`
  );
  try {
    const response = responseAxios.data;
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
    console.error(error);
  }
}

export { fetchTrendMoves, fetchSearchMove };
