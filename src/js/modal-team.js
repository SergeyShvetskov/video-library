const refs = {
  openModal: document.querySelector('.page-footer__link'),
  modalTeam: document.querySelector('[data-team-modal]'),
  closeModal: document.querySelector('.team-modal__close-button'),
};

refs.openModal.addEventListener('click', onOpenModal);

function onOpenModal(event) {
  event.preventDefault();
  refs.modalTeam.classList.remove('is-hidden');
}

refs.closeModal.addEventListener('click', onCloseModal);

function onCloseModal(event) {
  event.preventDefault();
  refs.modalTeam.classList.add('is-hidden');
}
