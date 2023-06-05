import add from './modules/form-submit.js';
import BookList from './modules/book-class.js';
import navbar from './modules/navigation-links.js';
import date from './modules/datetime.js';

date();

const newBook = new BookList();

document.getElementById('formID').addEventListener('submit', () => add());

newBook.displayBooks();
navbar();