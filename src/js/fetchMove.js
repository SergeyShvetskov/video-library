import Notiflix from "notiflix";
const axios = require('axios').default;

export default class MovesApiService {
  API_KEY = 'a79202f0028fac6a27982a88fb1459a6';
  COMMON_URL = 'https://api.themoviedb.org/3/';
  //   TRENDING_FilM = 'trending/all/day';
  TRENDING_FilM = 'movie/popular';
  SEARCH_FilM = 'search/movie';
  MOVIES_INFO = 'movie/';

  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.id = '';
  }

  async fetchMoviesInfo() {
    const responseAxios = await axios.get(
      `${this.COMMON_URL}${this.MOVIES_INFO}${this.id}?api_key=${this.API_KEY}`
    );
    try {
      const response = responseAxios.data;
      // console.log(response);
      return response;
    } catch (error) {
      Notiflix.Notify.failure(error);
      console.error(error);
    }
  }

  async fetchTrendMoves() {
    const responseAxios = await axios.get(
      `${this.COMMON_URL}${this.TRENDING_FilM}?api_key=${this.API_KEY}&page=${this.page}`
    );
    try {
      console.log(responseAxios);
      const response = responseAxios.data;
      return response;
    } catch (error) {
      Notiflix.Notify.failure(error);
      console.error(error);
    }
  }

  async fetchSearchMoves() {
    const responseAxios = await axios.get(
      `${this.COMMON_URL}${this.SEARCH_FilM}?api_key=${this.API_KEY}&query=${this.searchQuery}&page=${this.page}`
    );
    try {
      console.log(responseAxios);
      const response = responseAxios.data;
      return response;
    } catch (error) {
      Notiflix.Notify.failure(error);
      console.error(error);
    }
  }

  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }

  resetPage() {
    this.page = 1;
  }
}
