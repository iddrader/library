let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(title, author, pages, read){
    myLibrary.push(new Book(title, author, pages, read));
}

function displayLibraryBooks(){
    const books = document.querySelector('.books');
    books.textContent = "";

    myLibrary.forEach(book => {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('book-tile');

        const bookTitle = document.createElement('p');
        bookTitle.textContent = book.title;
        bookDiv.appendChild(bookTitle);

        const bookAuthor = document.createElement('p');
        bookAuthor.textContent = book.author;
        bookDiv.appendChild(bookAuthor);

        const bookPages = document.createElement('p');
        bookPages.textContent = book.pages;
        bookDiv.appendChild(bookPages);

        const isRead = document.createElement('p');
        isRead.textContent = book.read;
        bookDiv.appendChild(isRead);

        const removeBook = document.createElement('button');
        removeBook.textContent = "remove";
        removeBook.classList.add('remove-btn');
        removeBook.addEventListener('click', event => {
            myLibrary.splice(myLibrary.indexOf(book), 1);
            displayLibraryBooks();
        })
        bookDiv.appendChild(removeBook);

        const readBook = document.createElement('button');
        readBook.textContent = book.read;
        readBook.addEventListener('click', event => {
            if(book.read == "Read"){
                book.read = "Not read yet";
            } else {
                book.read = "Read";
            }
            event.target.textContent = book.read;
        })
        bookDiv.appendChild(readBook);

        books.appendChild(bookDiv);
    })
}

const bookForm = document.querySelector('form');

bookForm.addEventListener('submit', event => {
    event.preventDefault;
    const title = event.target['title'].value;
    const author = event.target['author'].value;
    const pages = event.target['pages'].value;
    let read = "Not read yet"

    if (event.target['read'].checked){
        read = "Read";
    }

    addBookToLibrary(title, author, pages, read);
    displayLibraryBooks();
    event.target.reset();
})