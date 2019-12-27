// book class

class Book {

  constructor(title, author, desc) {
    this.title = title;
    this.author = author;
    this.desc = desc;
  }
}

// ui class
class Ui {
          static displayBooks() {

                    const storeBooks = [
                      {
                        title: 'Book one',
                        author: 'Remarks',
                        desc: 'Nice'
                      },
                      {
                        title: 'Book two',
                        author: 'Remarks',
                        desc: 'Nice'
                      }
                    ]
            const books = storeBooks;
            books.forEach((book) => Ui.addBooksList(book));
          }

                static addBooksList(book) {

                  const list = document.querySelector('#book-formsData');
                  const row = document.createElement('tr');
                  row.innerHTML = `
                    <td>${book.title}</td>
                    <td>${book.author}</td>
                    <td>${book.desc}</td>
                    <td><a href="#" class="btn btn-danger remove"><i class="fas fa-trash"></i></a></td>
                    `
                    list.appendChild(row);
          }   

          static removeBookList(){
            const title=document.querySelector('#title').value=''
            const author=document.querySelector('#author').value=''
            const desc=document.querySelector('#desc').value=''
          }

          static deleteBookList(element){
            if(element.classList.contains('remove')){
               element.parentElement.parentElement.remove();
            }
          }
 
      }

// display data as list
document.addEventListener('DOMContentLoaded', Ui.displayBooks)

//add book as list onclick event
document.querySelector('#book-form').addEventListener('submit',(event)=>{
    event.preventDefault()
    const title=document.querySelector('#title').value
    const author=document.querySelector('#author').value
    const desc=document.querySelector('#desc').value
    const book=new Book(title,author,desc)
    console.log(book)
    Ui.addBooksList(book)
    Ui.removeBookList()
})

// remove booklist
document.querySelector('#book-formsData').addEventListener('click',(e)=>{
  console.log(e.target)
  Ui.deleteBookList(e.target)
  //Ui.removeBookList(e.target)
})