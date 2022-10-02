import {
  title, author, savedBookContainer, welcomeMessage,
} from './Variables.js';

// Write a function contructor to display the books
export default class BookKeeper {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    this.bookKeeperArray = JSON.parse(localStorage.getItem('books')) || [];
    // this.showSavedBooks();
    welcomeMessage.style.display = 'block';
  }

  // This is a method to show the saved books.
  showSavedBooks = () => {
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
  addNewBook = () => {
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
  deleteBook = (index) => {
    // Remove the book from the array
    this.bookKeeperArray.splice(index, 1);
    // Save the array to local storage
    localStorage.setItem('books', JSON.stringify(this.bookKeeperArray));
    // Show the saved books
    this.showSavedBooks();
  }
}