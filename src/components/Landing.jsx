import { useState } from 'react'
import Login from './Login'
import SignUp from './SignUp'

export default function Landing({ signUp, User }) {
    const [hasAccount, setHasAccount] = useState(true)
    function handleClick(){
      setHasAccount(!hasAccount)
    }
    
    return (
      <div> 
        {hasAccount ? <Login title="Login" handleClick={handleClick} User={User}/> : <SignUp handleClick={handleClick} signUp={signUp}/>}
      </div>
    )
}

