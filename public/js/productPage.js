// Upvote comments

const upvoteButtons = Array.from(
  document.getElementsByClassName("upvote-button")
);

// fetch to send upvote to db

const postUpvote = (commentId, upvotesNumber) => {
  fetch("/upvote", {
    method: "POST",
    body: JSON.stringify({ commentId, upvotesNumber }),
    headers: { "Content-Type": "application/json" }
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

upvoteButtons.map(upvoteButton => {
  upvoteButton.addEventListener("click", () => addUpvote());
});
