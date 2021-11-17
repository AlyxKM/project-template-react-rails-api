import React from 'react'
import Books from './Books'
import BookShelf from './BookShelf'

function MainDisplay({bookList, bookShelf}) {

    /*const bookDetails = bookList.map(books => <Books key={books.id} title={books.title} genre={books.genre} author={books.author}/>)


    const userBookShelf = bookShelf.map(books => <BookShelf key={books.id} title={books.title} genre={books.genre} author={books.author}/>) */

    return (
        <div >
            <Books />
            <hr />
            <BookShelf />
        </div>
    )
}

export default MainDisplay
