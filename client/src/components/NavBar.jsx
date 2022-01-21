import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'
import Books from './Books'
import BookShelf from './BookShelf'

function NavBar({setBookList, setMyShelf, myShelf, fullBookList, setBookShelf,bookShelf, currentUser}) {

    // const userbooks = bookShelf.map(() =>  <Books key={bookShelf.book.id} title={bookShelf.book.title} genre={bookShelf.book.genre} author={bookShelf.book.author_name} image={bookShelf.book.image} bookId={bookShelf.book.id} />)

    return (
        <div class="NavBar">
            <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} />
            <h4 onClick={() => setMyShelf(!myShelf)}>My Bookshelf</h4>
            {myShelf? console.log(bookShelf, currentUser) : console.log("fullBookList")}

            {/* <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} /> */}

            <button onClick={() => setMyShelf(!myShelf)}>My Bookshelf</button>
            <button onClick={() => !setMyShelf(false)}>My Bookshelf</button>
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

// setBookList(bookShelf.book)

export default NavBar
