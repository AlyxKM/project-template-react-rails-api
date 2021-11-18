import React from 'react'

function FilterBy(handleFilterByGenre) {
    return (
        <div class="NavBar">
            {/* <h4>Filter By Genre</h4> */}

            
        <div>
            <select className="Dropdown" name="Filter by Genre">
                <option selected value="Filter by Genre">Filter by Genre</option>
                <option onClick= {(e) => handleFilterByGenre(e.target.id)} value="Science Fiction" id={"Science Fiction"}>Science Fiction</option>
                <option onClick= {(e) => handleFilterByGenre(e.target.id)} value="Young Adult" id={"YA"}>Young Adult</option>
                <option onClick= {(e) => handleFilterByGenre(e.target.id)} value="Fantasy" id={"Fantasy"}>Fantasy</option>
                <option onClick= {(e) => handleFilterByGenre(e.target.id)} value="LGBT" id={"LGBT"}>LGBT</option>
                <option onClick= {(e) => handleFilterByGenre(e.target.id)} value="Historical" id={"Historical"}>Historical Fiction</option>
                <option onClick= {(e) => handleFilterByGenre(e.target.id)} value="Horror" id={"Horror"}>Horror</option>
            </select>
            </div>

        </div>
    )
}

export default FilterBy
