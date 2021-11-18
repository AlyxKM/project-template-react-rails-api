import React from 'react'
import styled from 'styled-components'

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

const DropdownMenu = styled.div `
  padding: 0;
  margin: 0;
  padding-left: 1em;
  background: #ffffff;
  border: 2px solid #e5e5e5;
  box-sizing: border-box;
  color: #3faffa;
  font-size: 1.3rem;
  font-weight: 500;
  &:first-child {
    padding-top: 0.8em;
  }

`

