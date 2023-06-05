export default function navbar() {
  const myLinksContainer = document.getElementById('list');
  const addContainer = document.getElementById('new');
  const contactContainer = document.getElementById('contact');
  const list = document.getElementById('book-list');
  const bookForm = document.getElementById('book-form');
  const contactInfo = document.getElementById('contact-info');
  myLinksContainer.addEventListener('click', () => {
    bookForm.style.display = 'none';
    contactInfo.style.display = 'none';
    list.style.display = 'block';
    addContainer.classList.remove('active');
    contactContainer.classList.remove('active');
    myLinksContainer.classList.add('active');
  });
  addContainer.addEventListener('click', () => {
    list.style.display = 'none';
    contactInfo.style.display = 'none';
    bookForm.style.display = 'block';
    myLinksContainer.classList.remove('active');
    contactContainer.classList.remove('active');
    addContainer.classList.add('active');
  });
  contactContainer.addEventListener('click', () => {
    bookForm.style.display = 'none';
    list.style.display = 'none';
    contactInfo.style.display = 'block';
    addContainer.classList.remove('active');
    myLinksContainer.classList.remove('active');
    contactContainer.classList.add('active');
  });
}