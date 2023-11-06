import Link from 'next/link'
import React from 'react'

const UserList = () => {
  return (
    <div>
        <h1>User List</h1>
        <ul>
            <li>
                <Link href="/user-list/Arif">Arif</Link>
            </li>
            <li>
                <Link href="/user-list/Asif">Asif</Link>
            </li>
        </ul>
    </div>
  )
}

export default UserList