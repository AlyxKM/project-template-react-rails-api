import React from 'react'
import LoggedIn from './LoggedIn'
import Login from './Login'
import {useEffect, useState} from 'react'

function Header({setCurrentUser, currentUser}) {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
       fetch('/me')
       .then(res => res.json())
       .then(user => {
           setCurrentUser(user)
           setLoggedIn(true)
       }) 
     
    }, [])

    return (
        <div class="Header">
            {!loggedIn ? <Login setLoggedIn={setLoggedIn} setCurrentUser={setCurrentUser}/> : <LoggedIn currentUser={currentUser}/>}
            <h3>Recommended Books</h3>
        </div>
    )
}

export default Header
