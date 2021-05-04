class Book {
  constructor(title, author, isbn) {
    (this.title = title), (this.author = author), (this.isbn = isbn);
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");

    // create tr element
    const row = document.createElement("tr");

    // Insert cols

    row.innerHTML = `<td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`;
    list.appendChild(row);
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    // get parent

    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");

    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(`.alert`).remove();
    }, 3000);
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }

  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static displatBooks() {
    const books = Store.getBooks();
    books.forEach(function(book) {
      const ui = new UI();
      ui.addBookToList(book)
    });
  }

  static addBook(item) {
    const books = Store.getBooks();

    books.push(item);

    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();
    
    books.forEach(function(book, index) {
      console.log(book.isbn)
      if (book.isbn === isbn){
          books.splice(index, 1)
      }

      localStorage.setItem('books', JSON.stringify(books))
    });

  }
}

// DOM Load Event
document.addEventListener('DOMContentLoaded', Store.displatBooks())

// Event Listeners for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // instantiate book
  const book = new Book(title, author, isbn);

  // instantiate ui
  const ui = new UI();

  // validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill all fields", "error");
  } else {
    // Add book to list
    ui.addBookToList(book);
    Store.addBook(book);

    ui.showAlert("Book Added", "success");
    ui.clearFields();
  }

  e.preventDefault();
});

// Event Listeners for delete book
document.getElementById("book-list").addEventListener("click", function (e) {
  const ui = new UI();

  //delete book
  ui.deleteBook(e.target);

  Store.removeBook(e.target.parentElement.previousElementSibling.textContent)

  //show message
  ui.showAlert("Book Removed!", "success");
  e.preventDefault();
});
