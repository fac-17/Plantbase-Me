// slider on home-page
const contentSlider = document.querySelector(".content-slider");
const slideCount = 4;
let selectedIndex = 4;

const rotateCarousel = () => {
  const angle = (selectedIndex / slideCount) * -360;
  contentSlider.style.transform =
    "translateZ(-256px) rotateY(" + angle + "deg)";
};

const limitSelectedIndex = () => {
  if (selectedIndex === 5) {
    selectedIndex = 1;
  } else if (selectedIndex <= 0) {
    selectedIndex = 4;
  }
};

const prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function() {
  selectedIndex--;
  limitSelectedIndex();
  rotateCarousel();
});

const nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function() {
  selectedIndex++;
  limitSelectedIndex();
  rotateCarousel();
});

// Pass selected category to the back-end

const selectButton = document.querySelector(".select-button");

selectButton.addEventListener("click", () => {
  selectedIndex++;
  limitSelectedIndex();
  location.assign(`/results/${selectedIndex}`);
});

// Forward user if slider image was clicked

const selectedSlide = document.querySelector(".content-slider");

selectedSlide.addEventListener("click", () => {
  selectedIndex++;
  limitSelectedIndex();
  location.assign(`/results/${selectedIndex}`);
});
