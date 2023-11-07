import React from 'react'
import getUsers from '@/services/getUsers'
import Link from 'next/link';

const Ssg = async() => {
    const usersList = getUsers();
    const users = await usersList
    console.log("users",users)
  return (
    <div>
        <h1>Static site generation</h1>
        {
            users.map((ele:any)=>{
                return <p key={ele.id}><Link href={`/ssg/${ele.id}`}>{ele?.name}</Link></p>
            })
        }
    </div>
  )
}

export default Ssg