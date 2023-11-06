"use client"
import React from 'react'

interface UserProps {
    user: any;
  }

const User = ({user}:UserProps) => {
    console.log(user)
  return (
    <div>
        <h1>User Details</h1>
        <p>{user}</p>
    </div>
  )
}

export default User