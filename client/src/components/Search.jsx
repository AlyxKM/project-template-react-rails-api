import React from 'react'

function Search({setSearchKeyWord}) {
    return (
        <div >
          <input
            class="form-control"
            type="text"
            id="search"
            placeholder="Search Books"
            onChange={(e) => setSearchKeyWord(e.target.value)}
          />
        </div>
    )
}

export default Search
