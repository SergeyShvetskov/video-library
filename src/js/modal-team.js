const refs = {
  showModalLink: document.querySelector('.page-footer__link'),
  modalTeam: document.querySelector('[data-team-modal]'),
};

refs.showModalLink.addEventListener('click', onShowModal);

function onShowModal(event) {
  event.preventDefault();
  refs.modalTeam.classList.remove('is-hidden');
}
