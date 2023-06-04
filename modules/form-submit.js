import BookList from './book-class.js';

export default function add() {
  function logSubmit(event) {
    const newBook = new BookList();
    const bookTitle = document.querySelector('#book-title').value;
    const bookAuthor = document.querySelector('#book-author').value;
    newBook.addBooks(bookTitle, bookAuthor);
    newBook.displayBooks();
    document.querySelector('#book-title').value = '';
    document.querySelector('#book-author').value = '';
    event.preventDefault();
  }
  document.querySelector('#submit-button').addEventListener('submit', () => logSubmit());
}
