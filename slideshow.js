//slides er nu et array af elementer
const slides = document.querySelectorAll(".slide");
console.log(slides);

let currentIndex = 0;

function displayImageNumber(displayNumber) {
    currentIndex = displayNumber;
    // skjuler alle billeder
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    if(currentIndex > slides.length -1) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = slides.length -1
    }

    slides[currentIndex].style.display = "block";
}

displayImageNumber(0);

const btnNext = document.querySelector(".next");
const btnPrev = document.querySelector(".prev");

btnNext.addEventListener("click", () => {
    displayImageNumber(currentIndex+1)
})

btnPrev.addEventListener("click", () => {
    displayImageNumber(currentIndex-1)
})


