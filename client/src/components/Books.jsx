import React from 'react'

function Books({title, genre, author}) {
    return (
        <>
        <div className="BookImg">
            <img src="https://images3.penguinrandomhouse.com/cover/9780739360385" />
        </div>

        <div className="BookCards">
            <p>Title: book title</p>
            <p>Genre: book genre</p>
            <p>Author: book author</p>
        </div>
        </>
    )
}

export default Books
