
let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    }
}

Book.prototype.sayTitle = function() {
    return `The title of the book is ${this.title}`;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const Eragon = new Book('Eragon', 'Christopher Paolini', 509, 'not read yet');
const RoadsidePicnic = new Book('Roadside Picnic', 'Boris Natanovič Strugackij, Arkadij Natanovič Strugackij', 224 , 'Readed');

addBookToLibrary(theHobbit);
addBookToLibrary(Eragon);
addBookToLibrary(RoadsidePicnic);


function displayBooks(myLibrary){
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read Status: ${book.read}</p>`;
        document.querySelector('#books').appendChild(bookDiv);
    }
}

function toogleForm(){
    document.querySelector('#form').classList.toggle('hidden');
}


displayBooks(myLibrary);