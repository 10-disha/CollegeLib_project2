console.log("this is index.js");
//to do list
// 1.store all the data to the localStorage
// 2.give another column as an option to delete the book 
// 3.add a scroll bar to the view

//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;

}

//display constructor

function Display() {

}

//add methods to display prototypes
Display.prototype.add = function (book) {
    console.log('adding to UI');
    TableBody = document.getElementById('TableBody');
    let uiString = `
                <tr>
                        
                    <td>${book.name}</td>
                    <td>${book.author}</td>
                    <td>${book.type}</td>
                </tr>
                    `
             TableBody.innerHTML += uiString;       


}


//implement the clear function
Display.prototype.clear = function () {
    let LibraryForm = document.getElementById('LibraryForm');
    LibraryForm.reset();
}

//implement the validate function
Display.prototype.validate = function (book) {
   if(book.name.length<2 || book.author.length<2)
   {
      return false
   }

   else{
       return true;
   }
}

Display.prototype.show = function(type,displayMessage){
    let message = document.getElementById('message');
     message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
                <strong>Message</strong> ${displayMessage}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;

            setTimeout(function(){
                message.innerHTML=``
            },2000);
}




//add submit event listener to form LibraryForm
let LibraryForm = document.getElementById('LibraryForm');
LibraryForm.addEventListener('submit', libraryFormSubmit);

function libraryFormSubmit(e) {

    console.log('you have submitted the form.');
    let name = document.getElementById('bookName').value;
    let author = document.getElementById('Author').value;
    let type;

    //fiction, programming, cooking

    let fiction = document.getElementById('fiction');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');

    if (fiction.checked) {
        type = fiction.value;
    }

    else if (programming.checked) {
        type = programming.value;
    }

    else if (cooking.value) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);

    
    let display = new Display();

    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('success',' your book has been successfully added');

    }

    else{
        //show error to the user
        display.show('danger',' sorry you cannot add this book');
    }
   

    e.preventDefault();


}


























