// Redirect to homepage when logo clicked

const logo = document.getElementById("logo");
logo.addEventListener("click", () => {
  location.assign("/");
});

const plantbaseMeText = document.querySelector(".plantbase-me-text");
plantbaseMeText.addEventListener("click", () => {
  location.assign("/");
});

//back button

const backButton = document.querySelector(".back-button");
backButton.addEventListener("click", () => {
  window.history.back();
});

// Burger menu animation

const burgerButton = document.querySelector("#burgerMenuIcon");
const burgerMenu = document.querySelector("#burgerMenu");
const burgerItemLinks = Array.from(
  document.getElementsByClassName("burgerItemLink")
);

burgerButton.addEventListener("click", () => {
  burgerMenu.classList.toggle("visible");
  burgerItemLinks.map(link => link.classList.toggle("visible"));
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
