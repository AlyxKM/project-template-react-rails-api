import React from 'react'
import LoggedIn from './LoggedIn'
import Login from './Login'
import {useEffect, useState} from 'react'

function Header({setCurrentUser, currentUser, setBookList, fullBookList,}) {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
       fetch('/me')
       .then(res => res.json())
       .then(user => {
           setCurrentUser(user)
           //setLoggedIn(true)
       }) 
     
    }, [])

    console.log(loggedIn)

    return (
        <div class="Header">
            {loggedIn === false ? <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/> : <LoggedIn currentUser={currentUser} setLoggedIn={setLoggedIn}/>}
            <h3 onClick={(e) => setBookList(fullBookList)}>Recommended Books</h3>
            
        </div>
    )
}

export default Header