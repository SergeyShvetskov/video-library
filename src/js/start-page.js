import Notiflix from "notiflix";
import { fetchTrendMoves } from "./fetch";

document.addEventListener('DOMContentLoaded', startPage);

async function startPage() {
  fetchTrendMoves().then(response => {
    createCard(response);
  })
  .catch(err => Notiflix.Notify.failure(err));
}

export { startPage };