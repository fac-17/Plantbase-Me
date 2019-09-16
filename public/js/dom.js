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

  const currentVotes = numberOfUpvotes.innerHTML;
  numberOfUpvotes.innerHTML = Number(currentVotes) + 1;
  console.log("numberOfUpvotes = ", numberOfUpvotes.innerHTML);
};

upvoteButtons.map(upvoteButton => {
  upvoteButton.addEventListener("click", () => addUpvote());
});
