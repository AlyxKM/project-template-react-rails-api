import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'
import BookShelf from './BookShelf'

function NavBar({setBookList, fullBookList, bookShelf, currentUser}) {
    return (
        <div class="NavBar">
            <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} />
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

export default NavBar
