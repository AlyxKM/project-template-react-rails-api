import React from 'react'

function Search({setBookList, fullBookList}) {

  function setSearchKeyWord(title, e) {
    console.log(title)
    const searchedBook = fullBookList.filter((book)=> book.title.includes(title))
    setBookList(searchedBook)
  }

    return (
        <div >
          <form>
          <input
            class="form-control"
            type="text"
            id="search"
            placeholder="Search Books"
            onInput={(e) => setSearchKeyWord(e.target.value)}
          />
          </form>
        </div>
    )
}

export default Search
