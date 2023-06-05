import add from './modules/form-submit.js';
import BookList from './modules/book-class.js';
import navbar from './modules/navigation-links.js';
import date from './modules/datetime.js';
// Adding functionality of navbar using navigation-links module
navbar();
// Getting date using datetime module
date();
// Creating instance of class importing from book-class module
const newBook = new BookList();
// Calling eventlistner on form
document.getElementById('formID').addEventListener('submit', () => add());
// Calling method to display books using imported class
newBook.displayBooks();
