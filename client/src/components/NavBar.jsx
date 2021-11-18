import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'

function NavBar({setBookList, fullBookList}) {
    return (
        <div class="NavBar">
            <h4>BookShelf</h4>
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

export default NavBar
