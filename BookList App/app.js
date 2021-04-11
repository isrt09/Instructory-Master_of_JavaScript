// All Elements
let form = document.querySelector('#book-form');

// Add All Event Listeners
form.addEventListener('submit', addBook);

// All Classes
class Book{
    constructor(title, author, isbn){
        this.title   = title;
        this.author  = author;
        this.isbn    = isbn;
    }
}
class BookTable{
    constructor() {
        
    }
    bookList(book){
        let list = document.querySelector('#book-list');
        let row  = document.createElement('tr');
        row.innerHTML= `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td>                
                <a href="#" class="btn btn-success btn-sm">Edit</a>
                <a href="#" class="btn btn-danger btn-sm">Delete</a>                
            </td> `;
        list.appendChild(row);
        this.clearFields();
        //console.log(row);
    } 
    
    clearFields(){
        document.getElementById('title').value  = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value   = '';
    }
   
}
// All Functionalities
function addBook(e){    
    let title,author,isbn;
        title  = document.getElementById('title').value;
        author = document.getElementById('author').value;
        isbn   = document.getElementById('isbn').value;
    let book   = new Book(title,author,isbn);
        console.log(book);
    let bookList = new BookTable();
    if(title === '' || author === '' || isbn === '') {
        alert('Please Fill Up All Fields');
    }else{
        bookList.clearFields();
        bookList.bookList(book);
    } 
    
    e.preventDefault();

    
}


