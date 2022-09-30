// Declare varialbles for contact card, inputs, add form button and display div
const displayForm = document.querySelector('#book-add-form-div');
const contactMe = document.querySelector('#contact-me');
const savedBookContainer = document.querySelector('#show-saved-books');
const timeAndDate = document.querySelector('.time-date');

const dateAndTime = () => {
  setInterval(() => {
    const date = new Date().toUTCString();
    timeAndDate.innerHTML = date;
  }, 0);
};

dateAndTime();

// Declare class for saved books, to display form to add a new book, and contact buttons
const list = document.getElementById('list');
const addNew = document.getElementById('add-new');
const contact = document.getElementById('contact');

// Declare variable for the form
// const form = document.querySelector('.form');
const addNewBook = document.querySelector('.add-button');
const title = document.querySelector('#title');
const author = document.querySelector('#author');

// write a function constructor with methods for the books
const successDeletedCard = document.querySelector('.welcome-message');

class BookKeeper {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookKeeperArray = JSON.parse(localStorage.getItem('books')) || [];
    // this.showSavedBooks();
    successDeletedCard.style.display = 'block';
  }

  // This is a method to show the saved books.
  showSavedBooks() {
    savedBookContainer.innerHTML = `
        <h1 class="shelved-book-header font">Books Currently On Shelf</h1>
        <i class="quote font">"A book is a gift you can open again and again."</i>
        ${this.bookKeeperArray.map((shelf, index) => `
        <div class="shelved-book-card">
          <div class="shelf-input-div">
            <h5 class="user-input-value font">"${shelf.title}"</h5>
            <h5 class="user-input-value font">by ${shelf.author}</h5>
          </div>
          <div class="delete-button-div">
            <button class="delete-button" id=${index} > <img class="trash-can" src="images/icons/trash.png" alt="Trash Can" role="presentation"> </button>
          </div>
        </div>
        `).join('')}
        `;
  }

  // This is a method to add a new book to the saved books.
  addNewBook() {
    // Make a new book by using the constructor and input values
    const newBookInput = new BookKeeper(title.value, author.value);
    // Push the new book to the array
    this.bookKeeperArray.push(newBookInput);
    // Save the array to local storage
    localStorage.setItem('books', JSON.stringify(this.bookKeeperArray));
    // Clear the input fields
    title.value = '';
    author.value = '';
    // Show the saved books
    this.showSavedBooks();
  }

  // This is a method to delete a book from the saved books.
  deleteBook(index) {
    // Remove the book from the array
    this.bookKeeperArray.splice(index, 1);
    // Save the array to local storage
    localStorage.setItem('books', JSON.stringify(this.bookKeeperArray));
    // Show the saved books
    this.showSavedBooks();
  }
}

// createa a new instance of the BookKeeper class
const createNewBook = new BookKeeper();
const showErrorMessage = document.querySelector('.error-message-div');
const successCard = document.querySelector('.successfully-added-card');

addNewBook.addEventListener('click', (event) => {
  event.preventDefault();
  if (title.value === '' || author.value === '') {
    showErrorMessage.style.display = 'flex';
  } else {
    showErrorMessage.style.display = 'none';
    createNewBook.addNewBook(event);
    // hide the form
    // displayForm.style.display = 'none';
    // show the saved books
    // savedBookContainer.style.display = 'flex';
    // show success card and hide it after 3 seconds
    successCard.style.display = 'block';
    setTimeout(() => {
      successCard.style.display = 'none';
    }, 1500);
  }
});

// Event listener for the delete button
savedBookContainer.addEventListener('click', (event) => {
  if (event.target.className === 'trash-can') {
    const index = event.target.id;
    createNewBook.deleteBook(index);
  }
});

// Add event listener to list saved books
list.addEventListener('click', () => {
  savedBookContainer.style.display = 'flex';
  contactMe.style.display = 'none';
  displayForm.style.display = 'none';
  // if list is empty, show message
  if (createNewBook.bookKeeperArray.length === 0) {
    savedBookContainer.innerHTML = `
      <img class="sad-face-emoji" src="images/icons/sad-face-emoji.png" alt="Sad face emoji" role="presentation">
      <h3 class="empty-list-message font">You have no books on your shelf. Add a book to get started.</h3>
      `;
  } else {
    savedBookContainer.style.display = 'flex';
    contactMe.style.display = 'none';
    displayForm.style.display = 'none';
  }
});

// Add event listener to add new book
addNew.addEventListener('click', () => {
  displayForm.style.display = 'flex';
  contactMe.style.display = 'none';
  savedBookContainer.style.display = 'none';
});

// Add event listener to show contact information
contact.addEventListener('click', () => {
  contactMe.style.display = 'flex';
  displayForm.style.display = 'none';
  savedBookContainer.style.display = 'none';
});