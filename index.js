// constructor functions to create book objects
function Book(title, author, pages, read, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = id;

    this.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

// takes in an array to store the objects, and an event from a form to get the data to create new books
function addBookToLibrary(libraryArray, id){
    // gets the values from the form
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked ? 'Has Read' : 'Has Not Read';

    const bookItem = new Book(title, author, pages, read, id);

    libraryArray.push(bookItem);
}

function deleteBookAndRow(bookRow, libraryArray, id){
    bookRow.remove()
    libraryArray.forEach((item, index) => {
        if (item.id === id) {
            libraryArray.splice(index, 1);
        }
    });
}



// render the table each time a new book is added to the array
function render(bookTable, libraryArray){

    bookTable.innerHTML = '';

    const headerRow = document.createElement('div');
    headerRow.classList.add('headerRow');
    const headerTitle = document.createElement('div');
    headerTitle.textContent = "Title";
    const headerAuthor = document.createElement('div');
    headerAuthor.textContent = "Author"
    const headerPages = document.createElement('div');
    headerPages.textContent = "Pages"
    const headerHasRead = document.createElement('div');
    headerHasRead.textContent = "Has Read"
    const headerDelete = document.createElement('div');
    headerDelete.textContent = "Delete"

    headerRow.appendChild(headerTitle);
    headerRow.appendChild(headerAuthor);
    headerRow.appendChild(headerPages);
    headerRow.appendChild(headerHasRead);
    headerRow.appendChild(headerDelete);

    bookTable.append(headerRow);

    libraryArray.forEach(bookItem => {
        const bookRow = document.createElement("div");
        bookRow.classList.add("bookRow");
        bookRow.setAttribute('id',`${bookItem.id}`);
        const titleColumn = document.createElement("div")
        titleColumn.textContent = bookItem.title;
        const authorColumn = document.createElement("div")
        authorColumn.textContent = bookItem.author;
        const pagesColumn = document.createElement("div")
        pagesColumn.textContent = bookItem.pages;
        const readColumn = document.createElement("div")
        readColumn.textContent = bookItem.read;
        const deleteColumn = document.createElement("div")
        deleteColumn.classList.add("deleteColumn");
        deleteColumn.textContent = "DELETE";

        deleteColumn.addEventListener("click", function (){
            deleteBookAndRow(bookRow, libraryArray, bookItem.id);
        });

        bookRow.appendChild(titleColumn);
        bookRow.appendChild(authorColumn);
        bookRow.appendChild(pagesColumn);
        bookRow.appendChild(readColumn);
        bookRow.appendChild(deleteColumn);

        bookTable.appendChild(bookRow, libraryArray);
    })
}

let id = 1;
const myLibrary = [];
const bookTable = document.getElementById("bookTable");

const form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();
    addBookToLibrary(myLibrary, id)
    render(bookTable, myLibrary, id);

    id++;
})