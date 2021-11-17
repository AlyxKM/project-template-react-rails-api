import React from 'react'
import Books from './Books'
import BookShelf from './BookShelf'

function MainDisplay({bookList, bookShelf}) {

    const bookDetails = bookList.map(books => <Books key={books.id} title={books.title} genre={books.genre} author={books.author_name} image={books.image}/>)


    const userBookShelf = bookShelf.map(books => <BookShelf key={books.id} title={books.title} genre={books.genre} author={books.author}/>)

    return (
        <div className="MainContent">
            {bookDetails}
            {userBookShelf}
        </div>
    )
}

export default MainDisplay
