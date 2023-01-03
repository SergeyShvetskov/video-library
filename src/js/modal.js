
const modalCloseBtn = document.querySelector("[data-modal-close]");
const modal = document.querySelector("[data-modal]");

modalCloseBtn.addEventListener('click', toggleModal);
document.addEventListener('keydown', closeModalEsc);
document.addEventListener('click', closeModalClick);


function toggleModal() {
    modal.classList.add("is-hidden");
}

function closeModalClick(e) {
    if (e.target === modal) {
        modal.classList.add("is-hidden");
    }
}
  
function closeModalEsc(e) {
    if (e.keyCode === 27) {
        modal.classList.add("is-hidden");
    }
}

export { modal };
