import BookList from './book-class.js';

export default function add() {
  const newBook = new BookList();
  const bookTitle = document.querySelector('#book-title').value;
  const bookAuthor = document.querySelector('#book-author').value;
  newBook.addBooks(bookTitle, bookAuthor);
  newBook.displayBooks();
  document.querySelector('#book-title').value = '';
  document.querySelector('#book-author').value = '';
  event.preventDefault();
}
