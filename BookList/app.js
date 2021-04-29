// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");

  // create tr element
  const row = document.createElement("tr");

  // Insert cols

  row.innerHTML = `<td>${book.title}</td>
  <td>${book.title}</td>
  <td>${book.title}</td>
  <td><a href='#' class='delete'>X</a></td>`;
  list.appendChild(row);
};

// clear fields

UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

UI.prototype.showAlert = function (message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));

  // get parent

  const container = document.querySelector('.container');
  const form = document.querySelector('#book-form');
  
  container.insertBefore(div, form);

  setTimeout(function() {
    document.querySelector(`.alert`).remove();
    
  }, 3000)

};

UI.prototype.deleteBook =  function(target){
  if(target.className === 'delete'){
    target.parentElement.parentElement.remove();

  }
}

// Event Listeners for add book
document.getElementById("book-form").addEventListener("submit", function (e) {
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;

  // instantiate book
  const book = new Book(title, author, isbn);

  // instantiate ui
  const ui = new UI();

  console.log("ui", ui);

  // validate
  if (title === "" || author === "" || isbn === "") {
    ui.showAlert("Please fill all fields", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book Added", "success");
    ui.clearFields();
  }

  e.preventDefault();
});


// Event Listeners for delete book
 document.getElementById('book-list').addEventListener('click', function(e){
  const ui = new UI();
  ui.deleteBook(ui)
  e.preventDefault()
 });
