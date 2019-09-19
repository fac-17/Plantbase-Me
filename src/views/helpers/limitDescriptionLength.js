module.exports = description => {
  if (description.length > 200) {
    return description.slice(0, 199) + "...";
  }
  return description;
};
