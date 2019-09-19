// page elements
const contentSlider = document.querySelector(".content-slider");
const prevButton = document.querySelector(".previous-button");
const nextButton = document.querySelector(".next-button");
const selectedSlide = document.querySelector(".content-slider");
const selectButton = document.querySelector(".select-button");
const cravings = Array.from(document.getElementsByClassName("craving-svg"));

// variables used in slider
const numOfSlides = cravings.length;
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
  if (cravingSelectedIndex > numOfSlides) {
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
prevButton.addEventListener("click", () => rotateCarousel("backward"));
nextButton.addEventListener("click", () => rotateCarousel("forward"));

// render results of selected craving on button or icon click
selectButton.addEventListener("click", () => loadSelectedCraving());
selectedSlide.addEventListener("click", () => loadSelectedCraving());
