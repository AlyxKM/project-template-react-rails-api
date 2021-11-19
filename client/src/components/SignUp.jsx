import React from 'react'
import {useState} from 'react'
import {Link, withRouter} from 'react-router-dom'

function SignUp({setCurrentUser}) {

    const [input , setInput] = useState({
        user_name: "",
        password: "",
        })


        function formFill(e){
            setInput({...input, [e.target.name]: e.target.value})
            
        }

        function handleSubmit(e){
            e.preventDefault()
            fetch("/signup", {
                method : 'POST',
                headers :{"Content-Type":"application/json"},
                body: JSON.stringify(input)
            })
            .then(res=>res.json())
            .then(currentUser => {
                // some conditional logic based on response data
                setCurrentUser(currentUser)
              })
              
            }





    return (
     <div className="SignUp" onSubmit={handleSubmit}>
       <form>
        <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Username</label>
            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='user_name'  onChange={formFill}/>
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" name='password' onChange={formFill}/>
        </div>
            <button type="submit" class="btn btn-primary">Sign Up</button>
        </form>
    </div>
    )
}

export default SignUp
