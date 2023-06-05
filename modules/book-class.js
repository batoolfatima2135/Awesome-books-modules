export default class BookList {
  constructor() {
    if (localStorage.getItem('collection') !== null) {
      this.collection = JSON.parse(localStorage.getItem('collection'));
    } else {
      this.collection = [];
    }
  }

  addBooks(title, author) {
    this.collection.push({
      title,
      author,
    });
  }

  deleteBooks(index) {
    this.collection.splice(index, 1);
    this.displayBooks();
  }

  displayBooks() {
    const bookSection = document.querySelector('.books');
    bookSection.innerHTML = this.collection.map((book) => `
        <tr>
            <td>"${book.title}" by ${book.author}</td>
            <td><button type="button" class="btn btn-primary remove" >remove</button></td>
            
        </tr>
        `).join('');
    const bookItems = document.querySelectorAll('.remove');
    bookItems.forEach((bookItem) => {
      bookItem.addEventListener('click', this.deleteBooks.bind(this));
    });
    localStorage.setItem('collection', JSON.stringify(this.collection));
  }
}