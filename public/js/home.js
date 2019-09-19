// slider on hp
var contentSlider = document.querySelector(".content-slider");
var slideCount = 4;
var selectedIndex = 4;

function rotateCarousel() {
  var angle = (selectedIndex / slideCount) * -360;
  contentSlider.style.transform =
    "translateZ(-256px) rotateY(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
if (prevButton) {
  prevButton.addEventListener("click", function() {
    selectedIndex--;
    limitSelectedIndex();
    rotateCarousel();
  });
}

var nextButton = document.querySelector(".next-button");
if (nextButton) {
  nextButton.addEventListener("click", function() {
    selectedIndex++;
    limitSelectedIndex();
    rotateCarousel();
  });
}

const limitSelectedIndex = () => {
  if (selectedIndex === 5) {
    selectedIndex = 1;
  } else if (selectedIndex <= 0) {
    selectedIndex = 4;
  }
};

// Pass selected category to the back-end

const selectButton = document.querySelector(".select-button");

if (selectButton) {
  selectButton.addEventListener("click", () => {
    selectedIndex++;
    limitSelectedIndex();
    location.assign(`/results/${selectedIndex}`);
  });
}

// Forward user if slider image was clicked

const selectedSlide = document.querySelector(".content-slider");
console.log(selectedSlide);

if (selectedSlide) {
  selectedSlide.addEventListener("click", () => {
    selectedIndex++;
    limitSelectedIndex();
    location.assign(`/results/${selectedIndex}`);
  });
}
