import add from './modules/form-submit.js';
import BookList from './modules/book-class.js';
import navbar from './modules/navigation-links.js';
import date from './modules/datetime.js';

date();

const newBook = new BookList();

document.getElementById('submit-button').addEventListener('click', () => add());

newBook.displayBooks();
navbar();