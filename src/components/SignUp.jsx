import React from 'react'

export default function SignUp({handleClick}) {
  return (
    <form>
        <h2>Sign Up</h2>
        <div className="input-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
        </div>    
        <div className="input-control">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='type password' name='password'/>
        </div>
        <div className="input-control">
            <label htmlFor="password">Confirm Password</label>
            <input type="password-2" placeholder='confirm password' name='password'/>
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
