import React from 'react'
import getUsers from '@/services/getUsers'

const page = async (props:any) => {
    const usersList = getUsers();
    const singleUser = await usersList
    console.log("xxx", singleUser[1])
    //console.log("single user",props.params)
    const currentId = props.params.userId
   // console.log(singleUser[currentId-1])
    // currentId-1 coz array start  from 0
    const userDetails = singleUser[currentId-1];
  return (
    <div>
        <h1>User details page</h1>
        <h4>Name : {userDetails.name}</h4>
        <h4>Email : {userDetails.email}</h4>
        <h4>Website : {userDetails.website}</h4>
    </div>
  )
}

export default page

// generate static site generateStaticParams func name is mandatory

export const generateStaticParams= async ()=>{
  const usersList:any = getUsers();
  const singleUser = await usersList;
  // userId is folder name we took from 
  return singleUser.map((user: any) => ({
    userId: user.id.toString(),
  }));
}