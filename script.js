
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

function createBook(){
    let newBook = new Book(document.querySelector('#title').value,
        document.querySelector('#author').value,
        document.querySelector('#pages').value,
        document.querySelector('#read').checked ? 'Readed' : 'not read yet');

    myLibrary.push(newBook);
    console.table(myLibrary);
    document.querySelector('#books').innerHTML = "";
    displayBooks(myLibrary);


    //clear form
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#pages').value = '';
    document.querySelector('#read').checked = false;

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
        <p>Read Status: ${book.read}<button onclick="changeStatus(${i})">Change</button></p>
        <button class="delete" onclick="deleteBook(${i})">Delete</button>`;
        
        document.querySelector('#books').appendChild(bookDiv);

    }
}

function deleteBook(i){
    myLibrary.splice(i, 1);
    document.querySelector('#books').innerHTML = "";
    displayBooks(myLibrary);
}

function changeStatus(i){
    myLibrary[i].read = myLibrary[i].read === 'Readed' ? 'not read yet' : 'Readed';
    document.querySelector('#books').innerHTML = "";
    displayBooks(myLibrary);
}

function toogleForm(){
    document.querySelector('#form_div').classList.toggle('hidden');
}



displayBooks(myLibrary);
