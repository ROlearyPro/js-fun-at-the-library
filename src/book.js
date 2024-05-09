
function createTitle(title) {
  // Modify the title by returning the string with "The " appended.
  var returnVal = ("The " + title);

  return returnVal;
}

function buildMainCharacter(inName, inAge, inPronouns) {
  // just create an object by assigning the input values to the appropriate keys
  var mainCharacter = {
    name: inName,
    age: inAge,
    pronouns: inPronouns,
  };
  //return the object
  return mainCharacter;
}

function saveReview(reviewText, reviewArray) {
  //by default, can add review
  var canAdd = true;
  for (i = 0; i < reviewArray.length; i++) {
    if (reviewArray[i] === reviewText) {
      //if it's a duplicate, can't add it
      canAdd = false;
    }
  }
  if (canAdd === true) {
    //if it can be added, append to the end of the review array
    reviewArray.push(reviewText);
  }
  //return review array
  return reviewArray;
}

function calculatePageCount(bookTitle) {
  // takes the length of the title of the book, then multiplies it by 20 to get the pagecount.
  var pageCount = (bookTitle.length * 20);

  return pageCount;
}

function writeBook(bookTitle, bookCharacter, inputGenre) {
// assembles component variables into a single object, calling the calculatePageCount function to get the page count.
  newBook = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: inputGenre,
  };
  // returns the assembled object
  return newBook;
}

// takes the input book, then modifies the pagecount to be 3/4 of what it was previously. Then returns the input book.
function editBook(inputBook) {
  inputBook.pageCount = (inputBook.pageCount * 0.75);
  return inputBook;
}


module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
