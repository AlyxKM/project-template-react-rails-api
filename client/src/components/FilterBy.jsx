import React from 'react'


function FilterBy({setBookList, fullBookList}) {

    function handleFilterByGenre(id) {
        const filteredBooks = fullBookList.filter((book)=> book.genre.includes(id))
        setBookList(filteredBooks)
        console.log(id)
      }

    return (
        <div class="NavBar">
            {/* <h4>Filter By Genre</h4> */}

            
            <div>
            <select name="Dropdown" onChange={(e) => handleFilterByGenre(e.target.value)}>
                <option value="">Filter by Genre</option>
                <option value="Science Fiction">Science Fiction</option>
                <option value="YA">Young Adult</option>
                <option value="Fantasy">Fantasy</option>
                <option value="LGBT">LGBT</option>
                <option value="Historical">Historical Fiction</option>
                <option value="Horror">Horror</option>
            </select>
            </div>


        </div>
    )
}

export default FilterBy

