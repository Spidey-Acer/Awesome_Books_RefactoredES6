import BookCollection from './modules/bookCollection.js';
import addBook from './modules/addBook.js';
import updateTime from './modules/time.js';

const bookCollection = new BookCollection();
addBook(bookCollection);

const timeElement = document.getElementById('time');
updateTime(timeElement);
setInterval(() => updateTime(timeElement), 1000);
