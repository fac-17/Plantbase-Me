// Allow all parts of recipe card to be clickable
const resultCards = Array.from(document.getElementsByClassName("result-card"));
const resultLinks = Array.from(document.getElementsByClassName("result-link"));

resultCards.forEach((item, index) => {
  item.addEventListener("click", () => {
    location.assign(resultLinks[index].href);
  });
});
