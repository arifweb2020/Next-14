import Link from "next/link";
import React from "react";

interface UserListProps {
  id: number;
  name: string;
}

const userList = async () => {
  const res = await fetch("http://localhost:3000/api/users");
  const finalData = await res.json();
  return finalData;
};

const Crud = async () => {
  const data: UserListProps[] = await userList();
  return (
    <div>
      <h1>Fetch data from API Routes</h1>
      {data?.map((user: UserListProps) => {
        return (
          <p key={user.id}>
            <Link href={`/crud/${user.id}`}>{user.name}</Link>
            <span style={{marginLeft:'30px',color:'green'}}><Link href={`/crud/${user.id}/update`}>Edit</Link></span>
          </p>
        );
      })}
    </div>
  );
};

export default Crud;
