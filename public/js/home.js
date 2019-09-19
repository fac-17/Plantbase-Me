// slider on home-page
const contentSlider = document.querySelector(".content-slider");
const numOfSlides = 4;
let cravingSelectedIndex = 1;
let slideIndex = 0;

const updateIndexes = direction => {
  if (direction === "forward") {
    slideIndex++;
    cravingSelectedIndex++;
  } else {
    slideIndex--;
    cravingSelectedIndex--;
  }
  limitSelectedIndex();
};

const limitSelectedIndex = () => {
  if (cravingSelectedIndex === 5) {
    cravingSelectedIndex = 1;
  } else if (cravingSelectedIndex <= 0) {
    cravingSelectedIndex = 4;
  }
};

const rotateCarousel = direction => {
  updateIndexes(direction);
  const angle = (slideIndex / numOfSlides) * -360;
  contentSlider.style.transform =
    "translateZ(-256px) rotateY(" + angle + "deg)";
};

const loadSelectedCraving = () =>
  location.assign(`/results/${cravingSelectedIndex}`);

// Rotate slider on forward / backward clicks
const prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", () => rotateCarousel("backward"));

const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", () => rotateCarousel("forward"));

// render results of selected craving on button or icon click
const selectButton = document.querySelector(".select-button");
selectButton.addEventListener("click", () => loadSelectedCraving());

const selectedSlide = document.querySelector(".content-slider");
selectedSlide.addEventListener("click", () => loadSelectedCraving());
