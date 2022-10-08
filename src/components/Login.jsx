import React, { useState } from 'react'
import Landing from './Landing'
// import { User as user } from '../User'

export default function Login({handleClick, title, User}) {
    const email = User.email
    const password = User.password
    const [inputEmail, setInputEmail] = useState("")
    const [inputPassword, setInputPassword] = useState("")

    function handleLogin(event){
        event.preventDefault()
        if(inputEmail === email && inputPassword === password){
            alert(`Login successful! Welcome ${User.user}`)
        } else {
            alert("Invalid Credentials")
        }
    }

    return (
        <div>
            <form onSubmit={handleLogin}>
                <h2>{title}</h2>
                <div className="input-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} required/>
                </div>    
                <div className="input-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='type password' name='password' value={inputPassword} onChange={(e) => setInputPassword(e.target.value)} required/>
                </div>
                <div className="input-control">
                    <button type="submit">Login</button>
                </div>
                <div className="input-control">
                    <p onClick={handleClick}>Don't have an account?</p>
                </div>
            </form>
            <Landing/>
        </div>
    )
}
