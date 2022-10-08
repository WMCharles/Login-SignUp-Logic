import React from 'react'

export default function Login({handleClick, title}) {
  return (
    <form>
        <h2>{title}</h2>
        <div className="input-control">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
        </div>    
        <div className="input-control">
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='type password' name='password'/>
        </div>
        <div className="input-control">
            <button type="submit">Login</button>
        </div>
        <div className="input-control">
            <p onClick={handleClick}>Don't have an account?</p>
        </div>
    </form>
  )
}
