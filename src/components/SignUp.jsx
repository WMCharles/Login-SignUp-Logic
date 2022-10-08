import React, { useState} from 'react'

export default function SignUp({handleClick, signUp}) {

    const [username, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSignUp(event){
        event.preventDefault()
        signUp(username, email, password)
        // alert(`username - ${username} email - ${email} password - ${password}`)
        // Handleclick sets hasAccount to true and takes us to Login component
        setTimeout(handleClick, 1000)
    }

    return (
        <form onSubmit={handleSignUp}>
            <h2>Sign Up</h2>
            <div className="input-control">
                <label htmlFor="name">Username</label>
                <input type="text" name="username" id="username" value={username} onChange={(e) => setUserName(e.target.value)} required/>
            </div>
            <div className="input-control">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>    
            <div className="input-control">
                <label htmlFor="password">Create Password</label>
                <input type="password" placeholder='type password' name='password' value={password} onChange={(e) => setPassword(e.target.value)} required/>
            </div>
            <div className="input-control">
                <button type="submit">Sign Up</button>
            </div>
            <div className="input-control">
                <p onClick={handleClick}>Already have an account?</p>
            </div>
        </form>
    )
}
