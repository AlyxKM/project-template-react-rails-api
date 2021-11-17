import React from 'react'

function Login() {
    return (
        <div>
          <form className="Form">
            <input
                class="form-control"
                type='text'
                name='username'
                placeholder='Input Username'/>
            <input
                class="form-control"
                type='text'
                name='password'
                placeholder='Input Password'/>
            <button type='submit' class="btn btn-primary">Sign In</button>
            <button class="btn btn-primary">Sign Up</button>
    </form>
        </div>
    )
}

export default Login
