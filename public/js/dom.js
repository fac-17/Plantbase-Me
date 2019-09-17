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
if (prevButton) {
  prevButton.addEventListener("click", function() {
    selectedIndex--;
    rotateCarousel();
  });
}

var nextButton = document.querySelector(".next-button");
if (nextButton) {
  nextButton.addEventListener("click", function() {
    selectedIndex++;
    rotateCarousel();
  });
}

const upvoteButtons = Array.from(
  document.getElementsByClassName("upvote-button")
);

// fetch to send upvote to db

const postUpvote = commentId => {
  console.log("posting upvote with comment id", commentId);
  fetch(`/upvote`, {
    method: "POST",
    headers: { "Content-Type": "application/json" }
  })
    .then(function(data) {
      console.log("Request success: ", data);
    })
    .catch(function(error) {
      console.log("Request failure: ", error);
    });
};

const addUpvote = () => {
  const idNumber = event.target.id.split("-")[3];
  const numberOfUpvotes = document.getElementById(`upvotes-${idNumber}`);

  const currentVotes = numberOfUpvotes.textContent;
  numberOfUpvotes.textContent = Number(currentVotes) + 1;

  const upvoteButton = document.getElementById(event.target.id);
  upvoteButton.style.display = "none";

  postUpvote(idNumber);
};

if (upvoteButtons) {
  upvoteButtons.map(upvoteButton => {
    upvoteButton.addEventListener("click", () => addUpvote());
  });
}
