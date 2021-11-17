import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'

function NavBar({setSearchKeyWord}) {
    return (
        <div class="NavBar">
            <h4>BookShelf</h4>
            <FilterBy />
            <Search setSearchKeyWord={setSearchKeyWord}/>
        </div>
    )
}

export default NavBar
