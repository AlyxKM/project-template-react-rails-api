import React from 'react'

function Login() {
    return (
        <div>
            <form>
        <input
            type='text'
            name='username'
            placeholder='Input Username'/>
        <input
            type='text'
            name='password'
            placeholder='Input Password'/>
        <input type='submit'/>
    </form>
        </div>
    )
}

export default Login
