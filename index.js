import add from './modules/form-submit.js';
import BookList from './modules/book-class.js';
import navbar from './modules/navigation-links.js';

const newBook = new BookList();
add();
newBook.displayBooks();
navbar();