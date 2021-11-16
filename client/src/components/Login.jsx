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
            <input type='submit'/>
    </form>
        </div>
    )
}

export default Login
