import React from 'react'

function BookShelf({title, genre, author, image, currentUser, setBookList, bookShelf, fullBookList, setBookShelf}) {

    
    function openUserBookshelf(currentUser, bookShelf, setBookList, fullBookList) {
            console.log(currentUser)
        //     //grabs user_id once they are logged in
                //on clicking my bookshelf, will load bookshelf data, collect book ids, and use them to display book data like in main display

                // id = currentUser.id
                // userBookshelf = bookShelf.filter((bookshelf)=> bookshelf.user_id.includes(id))
                // console.log(id)
                //openBookshelf = fullBookList.filter((book)=> book.id.includes(userBookShelf))
                //setBookList(openBookShelf)


                // fetch("/UserBookshlf")
                // .then(res => res.json())
                // .then(data => setBookShelf(data))
    }

        
    return (
         <div>
             {/* <h4 onClick={(e) => openUserBookshelf(currentUser)}>My Bookshelf</h4> */}
             {/* <div class="card mb-3">
             <div class="row g-0">
                  <div class="col-md-3">
                      <img src={image} class="img-fluid rounded-start" alt={title} />
                  </div>
                  <div class="col-md-9">
                     <div class="card-body">
                      <h5 class="card-title">{title}</h5>
                      <p class="card-text">Genre: {genre}</p>
                      <p class="card-text">Author: {author}</p>
                     </div>
                  </div>
             </div>
             <div  class="d-grid gap-2 d-md-flex justify-content-md-end">
             <button onClick={addToBookShelf} class="btn btn-primary me-md-2">Remove</button>
             </div>
         </div> */}
        
        </div>
     )
}


export default BookShelf
