import React from 'react'

export default function Home({User}) {
    return (
        <div>
            <h1>Welcome <span>{User.user}</span></h1>
        </div>
    )
}
