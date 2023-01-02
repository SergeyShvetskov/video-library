const modalCloseBtn = document.querySelector("[data-modal-close]");
const modalOpenBtn = document.querySelector("[data-modal-open]")
const modal = document.querySelector("[data-modal]");

modalOpenBtn.addEventListener('click', toggleModal);
modalCloseBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', closeModal);

function toggleModal() {
    modal.classList.toggle("is-hidden");
}
  
function closeModal(e) {
    if (e.keyCode === 27) {
        modal.classList.add("is-hidden");
    }
}

