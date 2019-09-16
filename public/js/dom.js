const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.assign("/");
});

// slider on hp
var contentSlider = document.querySelector(".content-slider");
var slideCount = 4;
var selectedIndex = 0;

function rotateCarousel() {
  var angle = (selectedIndex / slideCount) * -360;
  contentSlider.style.transform =
    "translateZ(-256px) rotateY(" + angle + "deg)";
}

var prevButton = document.querySelector(".previous-button");
prevButton.addEventListener("click", function() {
  selectedIndex--;
  rotateCarousel();
});

var nextButton = document.querySelector(".next-button");
nextButton.addEventListener("click", function() {
  selectedIndex++;
  rotateCarousel();
const upvoteButtons = Array.from(
  document.getElementsByClassName("upvote-button")
);

const addUpvote = () => {
  const idNumber = event.target.id.split("-")[3];
  const numberOfUpvotes = document.getElementById(`upvotes-${idNumber}`);

  const currentVotes = numberOfUpvotes.textContent;
  numberOfUpvotes.textContent = Number(currentVotes) + 1;

  const upvoteButton = document.getElementById(event.target.id);
  upvoteButton.style.display = "none";
};

upvoteButtons.map(upvoteButton => {
  upvoteButton.addEventListener("click", () => addUpvote());
});
