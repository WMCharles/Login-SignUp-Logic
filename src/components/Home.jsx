import React, { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function Home() {
    const [hasAccount, setHasAccount] = useState(true)

    function handleClick(){
        setHasAccount(!hasAccount)
    }

    return (
        <div className='home'>
            {hasAccount ? <Login title="Login" handleClick={handleClick}/> : <SignUp handleClick={handleClick}/>}
        </div>
    )
}
