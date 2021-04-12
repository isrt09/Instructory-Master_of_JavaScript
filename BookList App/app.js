// All Elements
let form = document.querySelector('#book-form');
let book = document.querySelector('#book-list');

// Add All Event Listeners
form.addEventListener('submit', addBook);
book.addEventListener('click', removeBook);
document.addEventListener('DOMContentLoaded', displayBook);

// All Classes
class Book{
    constructor(title, author, isbn){
        this.title   = title;
        this.author  = author;
        this.isbn    = isbn;
    }
}


class BookTable{
    
    bookList(book){
        let list = document.querySelector('#book-list');
        let row  = document.createElement('tr');
        row.innerHTML= `
            <td class= 'text-center'>${book.title}</td>
            <td class= 'text-center'>${book.author}</td>
            <td class= 'text-center'>${book.isbn}</td>
            <td class= 'text-center'>                
                <a href="#" class="btn btn-success btn-sm edit d-none">Edit</a>
                <a href="#" class="btn btn-danger btn-sm delete">Delete</a>                
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

    showAlert(message, className){
        let div       = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        let display = document.querySelector('.container');
        let form    = document.querySelector('#book-form');
        display.insertBefore(div,form);
        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 1000);
        
    }

    deleteBook(el){
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
            this.showAlert('Successfully Book Deleted!!','danger');
          }
    }   
   
}

class BookStore{
    getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    storeBook(book){
        let books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    } 

    removeStore(isbn){
        let books = this.getBooks();
        books.forEach((book, index)=>{
            if(book.isbn === isbn){
                books.splice(index,1);
            }
        });
        localStorage.setItem('books',JSON.stringify(books));
    }
        
}
// All Functionalities
function addBook(e){    
    let title,author,isbn;
        title  = document.getElementById('title') .value;
        author = document.getElementById('author').value;
        isbn   = document.getElementById('isbn')  .value;
    let book   = new Book(title,author,isbn);
        console.log(book);
    let bookList  = new BookTable();     
    if(title === '' || author === '' || isbn === '') {
        //bookList.showAlert('Please Fill Up all the Fields','danger');
        alert('Please Fill Up All Fields');        
    }else{        
        bookList.clearFields();
        bookList.bookList(book);        
        bookList.showAlert('Successfully Book Added!!','success');
        // Local Storage
        let bookstore = new BookStore();
        bookstore.storeBook(book);           
    }     
    e.preventDefault();    
}


function removeBook(e){
    if(confirm('Are you Sure to Delete?')){
        let book  = new BookTable();
        let local = new BookStore();        
        book.deleteBook(e.target);  
        local.removeStore(e.target.parentElement.previousElementSibling.textContent);
        e.preventDefault();
    }    
}


function displayBook(){
    let displaybookstore = new BookStore();
    let bookList         = new BookTable(); 
    let books            = displaybookstore.getBooks();
    books.forEach(book=>{
        bookList.bookList(book);
    })
}

