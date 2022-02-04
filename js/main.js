const swiper = new Swiper('.swiper', {
    //slidesPerView: 3,
    speed: 400,
    spaceBetween: 70,
    centeredSlides: true,
    slideToClickedSlide: true,
    toggle: true,
    loop: true,
    //адаптивность!!!!
    breakpoints: {
        320: {
            slidesPerView: 1
        },
        769: {
            slidesPerView: 2
        },
        1200: {
            slidesPerView: 3
        }
    }
});

const modalWindow = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-display__button');

buttonModal.addEventListener('click', (event) => {
    modalWindow.classList.add('active');
    document.body.classList.add('unscrollable');
});

modalWindow.addEventListener('click', (event) => {
    const isModal = event.target.closest('.modal__inner');
    if (!isModal) {
        modalWindow.classList.remove('active');
        document.body.classList.remove('unscrollable');
    }
});