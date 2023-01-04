export function getTeamCard({ photo, name, position, git, linkedin, email }) {
  return `<div class="team-card">
    <img class="team-card__img" src="${photo}" alt="${name}" width="200px" height="250px">
    <div class="team-card__info">
    <h3 class="team-card__title">${name}</h3>
    <p class="team-card__text">${position}</p>
    <ul class="team-card__list">
        <li class="team-card__item">
          <a class="team-card__link" href="${git}">
            <svg width="30" height="30">
              <use href="src/images/symbol-defs.svg#icon-github"></use>
            </svg>
          </a>
        </li>
        <li class="team-card__item">
          <a class="team-card__link" href="${linkedin}">
            <svg width="30" height="30">
              <use href="src/images/symbol-defs.svg#icon-linkedin"></use>
            </svg>
          </a>
        </li>
        <li class="team-card__item">
          <a class="team-card__link" href="mailto:${email}">
            <svg width="30" height="30">
              <use href="src/images/symbol-defs.svg#icon-message"></use>
            </svg>
          </a>
        </li>
    </ul>
    </div>
</div>`;
}
