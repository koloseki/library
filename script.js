
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





function displayBooks(myLibrary){
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookDiv = document.createElement('div');
        bookDiv.classList.add('book');
        bookDiv.innerHTML = `<h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p>Read Status:  &nbsp<button class="change_button" onclick="changeStatus(${i})"> ${book.read}</button></p>
        <button class="delete" onclick="deleteBook(${i})">Remove</button>`;
        
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

    if(document.querySelector('#form_div').classList.contains('hidden')){
        document.querySelector('#addBook').innerHTML = 'Add Book';
    }else {
        document.querySelector('#addBook').innerHTML = 'Close';
    }
}



displayBooks(myLibrary);
