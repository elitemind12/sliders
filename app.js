let slides = document.getElementsByClassName("slidder___slide");
let navLinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;


document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1);
});

document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1);
});

//Reduce function
document.querySelectorAll('.slider__navlink').forEach((bullet, bulletIndex) => {
    bullet.addEventListener('click', () => {
        if (currentSlide !== bulletIndex) {
            changeSlide(bulletIndex);
        }
    })
});
//one argurment function
function changeSlide(moveto) {
    //when slide reach destinations
    if (moveto >= slides.length) {
        moveto = 0;
    }
    if (moveto < 0) {
        moveto = slides.length - 1;
    }
    //initial and dynamic slide state
    slides[currentSlide].classList.toggle("active");
    navLinks[currentSlide].classList.toggle("active");
    slides[moveto].classList.toggle("active");
    navLinks[moveto].classList.toggle("active");

    currentSlide = moveto;
}

