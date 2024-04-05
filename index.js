// constructor functions to create book objects
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function(){
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    }
}

// takes in an array to store the objects, and an event from a form to get the data to create new books
function addBookToLibrary(event, libraryArray){
    let bookItem;

    // if the has read is true or false, change the read property as needed
    if(event.target.form[3].checked === true){
        bookItem = new Book(event.target.form[0].value, event.target.form[1].value, event.target.form[2].value, "Has Read");
    }else{
        bookItem = new Book(event.target.form[0].value, event.target.form[1].value, event.target.form[2].value, "Has Not Read");
    }

    libraryArray.push(bookItem);
}

// render the table each time a new book is added to the array
function render(mainBody, libraryArray){

    mainBody.innerHTML = '';

    libraryArray.forEach(bookItem => {
        const bookRow = document.createElement("div");
        const titleColumn = document.createElement("div")
        titleColumn.textContent = bookItem.title;
        const authorColumn = document.createElement("div")
        authorColumn.textContent = bookItem.author;
        const pagesColumn = document.createElement("div")
        pagesColumn.textContent = bookItem.pages;
        const readColumn = document.createElement("div")
        readColumn.textContent = bookItem.read;
        const deleteColumn = document.createElement("div")

        bookRow.appendChild(titleColumn);
        bookRow.appendChild(authorColumn);
        bookRow.appendChild(pagesColumn);
        bookRow.appendChild(readColumn);
        bookRow.appendChild(deleteColumn);

        mainBody.appendChild(bookRow);
    })
}

const myLibrary = [];
const mainContent = document.getElementById("mainContent");

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    addBookToLibrary(event ,myLibrary)
    render(mainContent, myLibrary);
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
theHobbit.info();