const axios = require('axios').default;
export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  async fetchMoves() {
    const URL = 'https://api.themoviedb.org/3/search/movie';
    const KEY = 'a79202f0028fac6a27982a88fb1459a6';

    const responseAxios = await axios.get(
      `${URL}?api_key=${KEY}&query=${this.searchQuery}&page=${this.page}`
    );
    try {
      console.log(responseAxios);
      const response = responseAxios.data;
      this.page += 1;
      return response;
    } catch (error) {
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
