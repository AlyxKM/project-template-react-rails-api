import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'
import BookShelf from './BookShelf'

function NavBar({setBookList, setMyShelf, myShelf, fullBookList, setBookShelf,bookShelf, currentUser}) {
    return (
        <div class="NavBar">
            <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} />
            <h4 onClick={() => setMyShelf(!myShelf)}>My Bookshelf</h4>
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

export default NavBar
