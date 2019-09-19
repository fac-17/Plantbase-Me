module.exports = ratings => {
  const averageRating =
    ratings.reduce((acc, ratingRow) => acc + ratingRow.rating, 0) /
    ratings.length;

  return Math.round(averageRating);
};
