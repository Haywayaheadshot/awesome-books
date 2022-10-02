// import everything from Variables.js
import {
  displayForm, contactMe, savedBookContainer, list,
  addNew, contact, addNewBook, title, author,
  showErrorMessage, successCard, welcomeMessage, noBooks,
} from './modules/Variables.js';

// import bookKeeper from './modules/Constructor.js';
import BookKeeper from './modules/Constructor.js';

// import dateAndTime from './modules/Function.js';
import dateAndTime from './modules/Function.js';

// call dateAndTime function
dateAndTime();

// createa a new instance of the BookKeeper class
const createNewBook = new BookKeeper();

// Event listener to show if book was successfully added or there was an error
addNewBook.addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value === '' || author.value === '') {
    showErrorMessage.style.display = 'flex';
  } else {
    showErrorMessage.style.display = 'none';
    createNewBook.addNewBook(event);
    // show success card and hide it after 3 seconds
    successCard.style.display = 'block';
    setTimeout(() => {
      successCard.style.display = 'none';
    }, 1500);
  }
  welcomeMessage.style.display = 'none';
});

// Event listener for the delete button
savedBookContainer.addEventListener('click', (event) => {
  if (event.target.className === 'trash-can') {
    const index = event.target.id;
    createNewBook.deleteBook(index);
    // if there are no books in the array, display no books message
    if (createNewBook.bookKeeperArray.length === 0) {
      savedBookContainer.innerHTML = noBooks;
    }
  }
});

// Add event listener to list saved books
list.addEventListener('click', () => {
  contactMe.style.display = 'none';
  displayForm.style.display = 'none';
  welcomeMessage.style.display = 'none';
  // if list is empty, show message
  if (createNewBook.bookKeeperArray.length > 0) {
    createNewBook.showSavedBooks();
    contactMe.style.display = 'none';
    displayForm.style.display = 'none';
    welcomeMessage.style.display = 'none';
  } else {
    savedBookContainer.innerHTML = noBooks;
    contactMe.style.display = 'none';
    displayForm.style.display = 'none';
    welcomeMessage.style.display = 'none';
  }
  savedBookContainer.style.display = 'flex';
});

// Add event listener to add new book
addNew.addEventListener('click', () => {
  displayForm.style.display = 'flex';
  contactMe.style.display = 'none';
  savedBookContainer.style.display = 'none';
  welcomeMessage.style.display = 'none';
});

// Add event listener to show contact information
contact.addEventListener('click', () => {
  contactMe.style.display = 'flex';
  displayForm.style.display = 'none';
  savedBookContainer.style.display = 'none';
  welcomeMessage.style.display = 'none';
});
