import React from 'react'

export default function Landing({user}) {
  return (
    <div>
        <h1>Welcome <span>{user.user}</span></h1>
    </div>
  )
}

