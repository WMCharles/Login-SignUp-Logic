import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function Home() {
    const [hasAccount, setHasAccount] = useState(true)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function handleClick(){
        setHasAccount(!hasAccount)
    }

    function signUp(newuser, newemail, newpassword){
        setEmail(newemail)
        setPassword(newpassword)
        setUser(newuser)
    }

    console.log({user, email, password})

    return (
        <div className='home'>
            {hasAccount ? <Login title="Login" handleClick={handleClick}/> : <SignUp handleClick={handleClick} signUp={signUp}/>}
        </div>
    )
}
