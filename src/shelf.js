function shelfBook(bookObject, shelfArray) {
  // console.log(shelfArray);
  if (shelfArray.length < 3) {
    shelfArray.unshift(bookObject);
  }

  return shelfArray;
}

function unshelfBook(bookName, shelfArray) {
  for (i = 0; i < shelfArray.length; i++) {
    if (bookName === shelfArray[i].title) {
      shelfArray.splice(i, 1);
      console.log(shelfArray);
    }
  }
  return shelfArray;
}

function listTitles(shelfArray) {
var titleList;
  if(shelfArray.length > 1)
  {
    titleList = (shelfArray[0].title);
    for (i = 1; i < shelfArray.length; i++) {
      titleList = (titleList + `, ${shelfArray[i].title}`)
    }
  }else if (shelfArray.length === 1)
  {
    titleList = (shelfArray[0].title);
    return (`${shelfArray[0].title}`);
  }
  return titleList;
  

}

function searchShelf(shelfArray, bookTitle)
{
  for (i = 0; i < shelfArray.length; i++) {
    if (shelfArray[i].title === bookTitle) {
      return true;
    }
  }
  return false;
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};