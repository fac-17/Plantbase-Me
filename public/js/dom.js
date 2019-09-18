// Redirect to homepage when logo clicked

const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.assign("/");
});

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

// Upvote comments

const upvoteButtons = Array.from(
  document.getElementsByClassName("upvote-button")
);

// fetch to send upvote to db

const postUpvote = (commentId, upvotesNumber) => {
  console.log("posting upvote with comment id", commentId);
  fetch("/upvote", {
    method: "POST",
    body: JSON.stringify({ commentId, upvotesNumber }),
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
  const newUpvotes = Number(currentVotes) + 1;
  numberOfUpvotes.textContent = newUpvotes;

  const upvoteButton = document.getElementById(event.target.id);
  upvoteButton.style.display = "none";

  postUpvote(idNumber, newUpvotes);
};

if (upvoteButtons) {
  upvoteButtons.map(upvoteButton => {
    upvoteButton.addEventListener("click", () => addUpvote());
  });
}

//back button

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", () => {
  window.history.back();
});

// Burger menu animation

const burgerButton = document.querySelector("#burgerMenuIcon");
const burgerMenu = document.querySelector("#burgerMenu");

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("visible");
});

// display Stars

const ratings = Array.from(document.getElementsByClassName("result-rating"));
if (ratings) {
  ratings.map(rating => {
    let number = rating.textContent;
    let stars = "";
    for (let i = 1; i <= number; i++) {
      stars += "⭐";
    }
    rating.textContent = stars;
  });
}
