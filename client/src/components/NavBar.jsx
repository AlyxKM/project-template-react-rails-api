import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'
import BookShelf from './BookShelf'

function NavBar({setBookList, fullBookList, setBookShelf,bookShelf, currentUser}) {
    return (
        <div class="NavBar">
            <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} />
            <button onClick={}>my shelf</button>
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

export default NavBar
