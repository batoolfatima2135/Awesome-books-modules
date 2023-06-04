import logSubmit  from './modules/form-submit.js';
import BookList from './modules/book-class.js';
import navbar from './modules/navigation-links.js';


const newBook = new BookList();
document.querySelector('#submit-button').addEventListener('submit', () => logSubmit());
newBook.displayBooks();
navbar();