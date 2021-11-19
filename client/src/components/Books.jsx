import React from 'react'

function Books({title, genre, author, image, bookId, currentUser}) {

    function addToBookShelf(){

        const book = {
            user_id: currentUser.id,
            book_id: bookId,
            read: false
        }

        fetch("http://localhost:3000/bookshelves", {
            method: "POST",
            headers: {Accept: "application/json",
                    "Content-Type": "application/json"},
            body: JSON.stringify(book)
            })
            .then(r => r.json())
            .then(book =>console.log(book))
    }

    return (
        <div class="card mb-3">
            <div class="row g-0">
                 <div class="col-md-3">
                     <img src={image} class="img-fluid rounded-start" alt={title} />
                 </div>
                 <div class="col-md-9">
                    <div class="card-body">
                     <h5 class="card-title">Title: {title}</h5>
                     <p class="card-text">Genre: {genre}</p>
                     <p class="card-text">Author: {author}</p>
                    </div>
                 </div>
            </div>
            <div  class="d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={addToBookShelf} class="btn btn-primary me-md-2">Add to Bookshelf</button>
            </div>
        </div>
        
    )
}

export default Books


// function deleteBook({bookShelf.id}){

//     fetch(`http://localhost:3000/bookshelves/${bookshelf.id}`, {
//         method: "DELETE"})
// }
