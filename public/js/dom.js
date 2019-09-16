const logo = document.getElementById("logo");

logo.addEventListener("click", () => {
  location.assign("/");
});

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
