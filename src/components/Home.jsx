import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function Home() {
    const [hasAccount, setHasAccount] = useState(true)
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    
    function handleClick(){
        setHasAccount(!hasAccount)
    }

    return (
        <div className='home'>
            {hasAccount ? <Login title="Login" handleClick={handleClick}/> : <SignUp handleClick={handleClick}/>}
        </div>
    )
}
