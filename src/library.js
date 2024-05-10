function createLibrary(libraryName) {
  var createLibrary = {
    name: libraryName,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return createLibrary;
}

function addBook(library, book) {
  if (book.genre === "fantasy") {
    // console.log(book);
    library.shelves.fantasy.unshift(book);
  } else if (book.genre === "fiction") {
    library.shelves.fiction.unshift(book);
  }
  else {
    library.shelves.nonFiction.unshift(book);
  }

  return library;
}

function checkoutBook(library, bookName, bookGenre) {
  if (bookGenre === "fantasy") {
    // console.log(bookName);
    for (var i = 0; i < library.shelves.fantasy.length; i++) {
      if (library.shelves.fantasy[i].title === bookName) {
        library.shelves.fantasy.splice(i, 1);
        // console.log(library.shelves.fantasy);
        returnVal = `You have now checked out ${bookName} from the ${library.name}.`;
        return returnVal;
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`


  } else if (bookGenre === "fiction") {
    for (var i = 0; i < library.shelves.fiction.length; i++) {
      if (library.shelves.fiction[i].title === bookName) {
        library.shelves.fiction.splice(i, 1);
        // console.log(library.shelves.fiction);
        returnVal = `You have now checked out ${bookName} from the ${library.name}.`;
        return returnVal;
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`
  }
  else {
    for (var i = 0; i < library.shelves.nonFiction.length; i++) {
      if (library.shelves.nonFiction[i].title === bookName) {
        library.shelves.nonFiction.splice(i, 1);
        // console.log(library.shelves.nonFiction);
        returnVal = `You have now checked out ${bookName} from the ${library.name}.`;
        return returnVal;
      }

    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${library.name}.`
  }
}

function takeStock(library, shelfGenre) {
  console.log(shelfGenre);
  if (library.shelves[`${shelfGenre}`] === null)
  {
    library.shelves[`${shelfGenre}`] = [];
  }
  if (shelfGenre === undefined)
  {
    var totalBookCount = (library.shelves.fantasy.length + library.shelves.fiction.length + library.shelves.nonFiction.length)
    console.log(totalBookCount);
    return (`There are a total of ${totalBookCount} books at the ${library.name}.`);
  }
  return (`There are a total of ${library.shelves[`${shelfGenre}`].length} ${shelfGenre} books at the ${library.name}.`);
}

module.exports = {
  createLibrary,
  addBook,
  checkoutBook,
  takeStock
};