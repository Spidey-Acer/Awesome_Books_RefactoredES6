export default class BookCollection {
  constructor() {
    this.books = this.retrieveBooksFromLocalStorage();
    this.displayBooks();
  }

  retrieveBooksFromLocalStorage = () => {
    const storedBooks = localStorage.getItem('books');
    return storedBooks ? JSON.parse(storedBooks) : [];
  };

  updateLocalStorage() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  displayBooks() {
    const booksDiv = document.getElementById('books');
    booksDiv.innerHTML = '';

    if (this.books.length === 0) {
      booksDiv.innerHTML = '<p>No books found.</p>';
    } else {
      const ul = document.createElement('ul');

      this.books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author}`;

        if (index % 2 === 0) {
          li.classList.add('even');
        } else {
          li.classList.add('odd');
        }

        const removeBtn = document.createElement('button');
        removeBtn.classList.add('removeButton');
        removeBtn.type = 'button';
        removeBtn.textContent = 'Remove';

        removeBtn.addEventListener('click', () => {
          this.removeBook(index);
        });

        li.appendChild(removeBtn);
        ul.appendChild(li);
      });

      booksDiv.appendChild(ul);
    }
  }

  addBook(title, author) {
    const book = { title, author };
    this.books.push(book);
    this.displayBooks();
    this.updateLocalStorage();
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.displayBooks();
    this.updateLocalStorage();
  }
}
