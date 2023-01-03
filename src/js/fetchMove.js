const axios = require('axios').default;

export default class FetchData {
        #API_KEY = 'a79202f0028fac6a27982a88fb1459a6';
        #commonURL = 'https://api.themoviedb.org/3/';
        #trendingPath = 'trending/movie/day';
        #searchPath = 'search/movie';
        #params = {};
      
        constructor() {
          this.#params.api_key = this.#API_KEY;
        }
        // возвращает промис запроса на популярные фильмы
        getTrendingData(page = 1) {
          return (
            axios
              .get(this.#commonURL + this.#trendingPath, {
                params: { ...this.#params, page },
                transformResponse: transformResponseFunc,
              })
              .then(pruningResponse)
              .catch(e => {
                console.log('getTrendingData ERROR - ' + e.message);
              })
          );
        }
      
        // возвращает промис запроса на фильмы по поиску
        getSearchData(search, page = 1) {
          return axios
            .get(this.#commonURL + this.#searchPath, {
              params: { ...this.#params, query: `${search}`, page },
              transformResponse: transformResponseFunc,
            })
            .then(pruningResponse)
            .catch(e => {
              console.log('getSearchData ERROR - ' + e.message); 
            });
        }
      }
      
      function transformResponseFunc(response) {
        let results = {};
        try {
          let dataResponse = JSON.parse(response);
          const { page, total_pages, total_results } = dataResponse;
      
          results.data = dataResponse.results.map(movieObj => {
            movieObj.backdrop_path = `https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`;
            movieObj.poster_path = `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`;
            return movieObj;
          });
          results = { ...results, page, total_pages, total_results };
        } catch (error) {
          console.log('ошибка здесь', error);
          response.results.data = [];
        }
        // console.log(results);
        return results;
        
      }
      
      function pruningResponse(res) {
        if (!res.config.params.query) {
          res.config.params.query = null;
        }
        return {
          ...res.data,
          status: res.status,
          statusText: res.statusText,
          query: res.config.params.query,
        };
      }


// export default class NewsApiService {
//         constructor() {
//                 this.searchQuery = '';
//                 this.page = 1;
//         }
        
//         async fetchMoves() {
//                 const URL = 'https://api.themoviedb.org/3/search/movie';
//                 const KEY = 'a79202f0028fac6a27982a88fb1459a6';
                              
//                 const responseAxios = await axios.get(`${URL}?api_key=${KEY}&query=${this.searchQuery}&page=${this.page}`);
//                 try {
//                         console.log(responseAxios);
//                         const response = responseAxios.data;
//                         this.page += 1;
//                         return response;
//                 }   catch (error) {
//     console.error(error);
//   }     
//                                 };                         
        
//         get query() { return this.searchQuery };
//         set query(newQuery) { this.searchQuery = newQuery };

//         resetPage() {this.page = 1 };    

// }