import React from 'react'
import FilterBy from './FilterBy'
import Search from './Search'
import Books from './Books'
import BookShelf from './BookShelf'

function NavBar({setBookList, setMyShelf, myShelf, fullBookList, setBookShelf,bookShelf, currentUser}) {

<<<<<<< HEAD
    
=======
    // const userbooks = bookShelf.map(() =>  <Books key={bookShelf.book.id} title={bookShelf.book.title} genre={bookShelf.book.genre} author={bookShelf.book.author_name} image={bookShelf.book.image} bookId={bookShelf.book.id} />)

>>>>>>> 9b168351f2745430fc448470e4b6885e6aa246ad
    return (
        <div class="NavBar">
<<<<<<< HEAD
            <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} />
            <h4 onClick={() => setMyShelf(!myShelf)}>My Bookshelf</h4>
            {myShelf? console.log(bookShelf, currentUser) : console.log("fullBookList")}
=======
            {/* <BookShelf setBookList={setBookList} bookShelf={bookShelf} currentUser={currentUser} fullBookList={fullBookList} setBookShelf={setBookShelf} /> */}
<<<<<<< HEAD
            <button onClick={() => setMyShelf(!myShelf)}>My Bookshelf</button>
=======
            <button onClick={() => !setMyShelf(false)}>My Bookshelf</button>
>>>>>>> c8d330aab725d141d4d6c6eb905638e033b59b45
>>>>>>> 9b168351f2745430fc448470e4b6885e6aa246ad
            <FilterBy setBookList={setBookList} fullBookList={fullBookList}/>
            <Search setBookList={setBookList} fullBookList={fullBookList}/>
        </div>
    )
}

// setBookList(bookShelf.book)

export default NavBar
