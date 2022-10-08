import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'
import { defaultUser } from '../User'

export default function Home() {
    const [hasAccount, setHasAccount] = useState(true)
    const [user, setUser] = useState(defaultUser.name)
    const [password, setPassword] = useState(defaultUser.password)
    const [email, setEmail] = useState(defaultUser.email)

    const User = {user, email, password}

    function handleClick(){
        setHasAccount(!hasAccount)
    }

    function signUp(newuser, newemail, newpassword){
        setEmail(newemail)
        setPassword(newpassword)
        setUser(newuser)
    }

    console.log(User)

    return (
        <div className='home'>
            {hasAccount ? <Login title="Login" handleClick={handleClick} User={User}/> : <SignUp handleClick={handleClick} signUp={signUp}/>}
        </div>
    )
}
