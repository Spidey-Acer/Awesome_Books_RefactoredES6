export default function addBook(bookCollection) {
  document.getElementById('addButton').addEventListener('click', () => {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    bookCollection.addBook(title, author);
  });
}
