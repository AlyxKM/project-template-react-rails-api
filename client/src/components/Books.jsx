import React from 'react'

function Books({title, genre, author, image}) {
    return (
        <>
        <div className="BookImg">
            <img src={image} />
        </div>

        <div className="BookCards">
            <p>Title: {title}</p>
            <p>Genre: {genre}</p>
            <p>Author: {author}</p>
        </div>
        </>
    )
}

export default Books
