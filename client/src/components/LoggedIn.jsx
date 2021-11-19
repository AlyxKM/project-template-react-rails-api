import React from 'react'

function LoggedIn({currentUser, setLoggedIn}) {

    function logOut(){
        fetch("/logout", {method: 'DELETE'})
        setLoggedIn(false)
    }

    return (
        <div>
            <h3>Welcome, {currentUser.user_name}!</h3>
            <button class="btn btn-secondary" onClick={logOut}>Log Out</button>
        </div>
    )
}

export default LoggedIn
