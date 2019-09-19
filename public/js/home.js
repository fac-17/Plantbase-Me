// slider on home-page
const contentSlider = document.querySelector(".content-slider");
const slideCount = 4;
let selectedIndex = 4;

function rotateCarousel() {
  // weird next line is necessary because for whatever reason we're counting up from 4?
  var angle = (selectedIndex / slideCount) * -360 + 360;
  contentSlider.style.transform =
    "translateZ(-256px) rotateY(" + angle + "deg)";
}

let prevButtonCount = 0;

var prevButton = document.querySelector(".previous-button");
if (prevButton) {
  prevButton.addEventListener("click", function() {
    selectedIndex--;
    prevButtonCount++;
    console.log("prev", prevButtonCount);
    // limitSelectedIndex();
    rotateCarousel();
  });
  console.log("selectedIndex", selectedIndex);
  console.log("slideCount", slideCount);
}

var nextButton = document.querySelector(".next-button");
if (nextButton) {
  nextButton.addEventListener("click", function() {
    selectedIndex++;
    prevButtonCount--;
    console.log("selectedIndex", selectedIndex);
    console.log("slideCount", slideCount);
    // limitSelectedIndex();
    rotateCarousel();
  });
}

const limitSelectedIndex = () => {
  if (selectedIndex > slideCount) {
    selectedIndex = 1;
  } else if (selectedIndex <= 0) {
    selectedIndex = slideCount;
  }
};

// Pass selected category to the back-end

const selectButton = document.querySelector(".select-button");

// resets index to a range that corresponds with a page
const changeSelectedIndex = () => {
  if (selectedIndex > 7) {
    selectedIndex = (selectedIndex % 4) + 1;
  }
  if (selectedIndex < 4) {
    console.log("minus stuff", (selectedIndex = 7 - (selectedIndex % 4)));
    selectedIndex = 7 - (selectedIndex % 4);
  }
};

if (selectButton) {
  selectButton.addEventListener("click", () => {
    changeSelectedIndex();
    console.log("selectedIndex2", selectedIndex);
    // selectedIndex++;
    // limitSelectedIndex();
    location.assign(`/results/${selectedIndex - 3}`);
  });
}
