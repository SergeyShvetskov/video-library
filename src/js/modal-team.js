import cards from './data-modalTeam';
import { getTeamCard } from './card-team';

const refs = {
  openModal: document.querySelector('.page-footer__link'),
  modalTeam: document.querySelector('[data-team-modal]'),
  closeModal: document.querySelector('.team-modal__close-button'),
  teamList: document.querySelector('.js-team-list'),
};

refs.openModal.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  document.body.style.overflow = 'hidden';
  refs.modalTeam.classList.remove('is-hidden');
  renderTeamCard();
}

refs.closeModal.addEventListener('click', onCloseModal);

function onCloseModal(event) {
  event.preventDefault();
  clearTeamCard();
  refs.modalTeam.classList.add('is-hidden');
}

window.addEventListener('keydown', onEscKeyPress);

function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape';
  const isEscKey = event.code === ESC_KEY_CODE;

  if (isEscKey) {
    refs.modalTeam.classList.add('is-hidden');
    clearTeamCard();
  }
}

refs.modalTeam.addEventListener('click', onModalCloseBackdrop);

function onModalCloseBackdrop(event) {
  const isBackdrop = event.target.classList.contains('team-backdrop');

  if (isBackdrop) {
    refs.modalTeam.classList.add('is-hidden');
    clearTeamCard();
  }
}

function renderTeamCard() {
  const markup = cards.map(getTeamCard).join('');

  refs.teamList.insertAdjacentHTML('beforeend', markup);
}

function clearTeamCard() {
  refs.teamList.innerHTML = '';
  document.body.style.overflow = '';
}
