function createTitle(title) {
  console.log(title);

  var returnVal = ("The "+title);
  console.log(returnVal);

  return returnVal;
}
createTitle("Hello");
module.exports = {
  createTitle,
  // buildMainCharacter,
  // saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
