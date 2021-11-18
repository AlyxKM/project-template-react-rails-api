import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'

function NavBar({setSearchKeyWord, handleFilterByGenre}) {
    return (
        <div class="NavBar">
            <h4>BookShelf</h4>
            <FilterBy handleFilterByGenre={handleFilterByGenre}/>
            <Search setSearchKeyWord={setSearchKeyWord}/>
        </div>
    )
}

export default NavBar
