"use client"
import React from 'react'

interface UserProps {
  params: {
    // Define the structure of the 'params' object
    // You can add specific properties with their data types
    // For example, you might have an 'id' property of type string.
    user: string;
  };
  }

const User = ({params}:UserProps) => {
    console.log(params)
  return (
    <div>
        <h1>User Details</h1>
        <p>{params.user}</p>
    </div>
  )
}

export default User


