module.exports = ratings => {
  return (
    ratings.reduce((acc, ratingRow) => acc + ratingRow.rating, 0) /
    ratings.length
  );
};
