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

const myLibrary = [];

const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    addBookToLibrary(event ,myLibrary)
    console.log(myLibrary);
})

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "not read yet");
theHobbit.info();