import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'

function NavBar({setSearchKeyWord, setBookList, fullBookList}) {
    return (
        <div class="NavBar">
            <h4>BookShelf</h4>
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setSearchKeyWord={setSearchKeyWord}/>
        </div>
    )
}

export default NavBar
