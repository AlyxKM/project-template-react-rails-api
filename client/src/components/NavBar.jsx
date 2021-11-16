import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'

function NavBar() {
    return (
        <div class="NavBar">
            <h4>BookShelf</h4>
            <FilterBy />
            <Search />
        </div>
    )
}

export default NavBar
