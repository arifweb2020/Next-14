import React from 'react'

const sinsgleUser = async (id:number) => {
    const res = await fetch(`http://localhost:3000/api/users/${id}`);
    const finalData = await res.json();
    console.log("fdd", finalData.result[0])
    return finalData.result[0];
  };

const page = async ({params}:any) => {
    const data:any = await sinsgleUser(params.id)
  return (
    <div>
        <h1>Single user Data</h1>
        <p>Name : {data?.name}</p>
        <p>City : {data?.city}</p>
    </div>
  )
}

export default page