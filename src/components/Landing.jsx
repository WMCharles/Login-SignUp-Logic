import React from 'react'

export default function Landing({name = "User"}) {
  return (
    <div>
        <h1>Welcome <span>{name}</span></h1>
    </div>
  )
}

