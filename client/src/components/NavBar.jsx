import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'
import BookShelf from './BookShelf'

function NavBar({setBookList, setMyShelf, fullBookList, setBookShelf,bookShelf, currentUser, openUserBookshelf}) {
    return (
        <div class="NavBar">
            {/* <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} /> */}
            <button onClick={() => !setMyShelf(false)}>My Bookshelf</button>
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

export default NavBar
