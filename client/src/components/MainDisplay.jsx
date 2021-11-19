import React from 'react'
import Books from './Books'
import BookShelf from './BookShelf'


function MainDisplay({bookList, bookShelf, currentUser, myShelf}) {

    

    const bookDetails = bookList.map(books => <Books key={books.id} title={books.title} genre={books.genre} author={books.author_name} image={books.image} bookId={books.id} currentUser={currentUser}/>)



    // const userBookShelf = bookShelf.map(books => <BookShelf key={books.id} title={books.title} genre={books.genre} author={books.author} currentUser={currentUser}/>)

    console.log(bookShelf)

    return (
        <div>
            {/* {myShelf? {bookDetails}:{userBookShelf}} */}
            
            {bookDetails}
        
        </div>
    )
}

export default MainDisplay
