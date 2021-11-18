import React from 'react'
import LoggedIn from './LoggedIn'
import Login from './Login'
import {useState} from 'react'

function Header() {




    return (
        <div class="Header">
            <Login /> : <LoggedIn />
            <h3>Recommended Books</h3>
        </div>
    )
}

export default Header
