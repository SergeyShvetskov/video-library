const btnToTop = document.querySelector('.to__top');

window.onscroll = () => {
    if (window.scrollY > 100) {
        btnToTop.classList.add('to__top--show');
    } else if (window.scrollY < 100) {
        btnToTop.classList.remove('to__top--show');
    }
}

btnToTop.onclick = () => {
    window.scrollTo(0, 0);
}