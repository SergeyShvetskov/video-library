import { API_KEY,
  COMMON_URL,
  TRENDING_FilM,
  SEARCH_FilM, 
} from './refs'
const axios = require('axios').default;
  
async function fetchTrendMoves(page) {
    const responseAxios = await axios.get(
      `${COMMON_URL}${TRENDING_FilM}?api_key=${API_KEY}&page=${page}`
    );
    try {
    //   console.log(responseAxios);
      const response = responseAxios.data;
      return response;
    } catch (error) {
      console.error(error);
    }
}
async function fetchSearchMoves2(searchQuery, page) {
  console.log(`Працює fetchSearchMoves2 `);
    const responseAxios = await axios.get(
      `${COMMON_URL}${SEARCH_FilM}?api_key=${API_KEY}&query=${searchQuery}&page=${page}`
    );
    try {
      console.log(responseAxios);
      const response = responseAxios.data;
      // this.page += 1;
      return response;
    } catch (error) {
      console.error(error);
    }
}

export { fetchTrendMoves, fetchSearchMoves2 }