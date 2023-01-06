import { fetchTrendMoves } from "./fetch";

document.addEventListener('DOMContentLoaded', startPage);

async function startPage() {
  fetchTrendMoves().then(response => {
    createCard(response);
  })
  .catch(err => err.message);
}

export { startPage };