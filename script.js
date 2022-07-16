const sliderContainer = document.querySelector('.slider-container');

const slideLeft = document.querySelector('.left-slide');
const slideRight = document.querySelector('.right-slide');

const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');

const slideLength = slideRight.querySelectorAll('div').length;
console.log(slideLength);

let activeSlideIndex = 0;
slideLeft.style.top = `-${(slideLength-1)*100}vh`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight;

    if(direction === 'up') {
        activeSlideIndex++;
        console.log(activeSlideIndex);

        if(activeSlideIndex > slideLength-1) {
            activeSlideIndex = 0;
        }
    }
    else if(direction === 'down') {
        activeSlideIndex--;
        console.log(activeSlideIndex);
        if(activeSlideIndex < 0) {
            activeSlideIndex = slideLength - 1;
        }
    }

    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`;
    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`;
}