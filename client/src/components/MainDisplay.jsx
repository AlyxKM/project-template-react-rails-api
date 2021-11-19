import React from 'react'
import Books from './Books'
import BookShelf from './BookShelf'
import FilteredBooks from './FilteredBooks'
import {Route, Switch} from 'react-router-dom'
import SignUp from './SignUp';

function MainDisplay({bookList, bookShelf}) {

    const bookDetails = bookList.map(books => <Books key={books.id} title={books.title} genre={books.genre} author={books.author_name} image={books.image}/>)



    const userBookShelf = bookShelf.map(books => <BookShelf key={books.id} title={books.title} genre={books.genre} author={books.author}/>)

    return (
        <div>
         <Switch>
           <Route exact path="/SignUp">
            <SignUp />
           </Route>
           <Route exact path="/">
            {bookDetails}
            </Route>
            {userBookShelf}
            <FilteredBooks />
         </Switch>
        </div>
    )
}

export default MainDisplay
