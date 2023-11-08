"use client";
import React, { useEffect, useState } from "react";

const Page = ({ params }: any) => {
  let id = params.id;
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

useEffect(()=>{
    getUserDeatils()
},[])

  const getUserDeatils = async () => {
    console.log(name, city);
    let data: any = await fetch("http://localhost:3000/api/users/" + id)
    data = await data.json()
    setName(data.result.name)
    setCity(data.result.city)
  };

  const updateUser = async ()=>{
    console.log(name,city,id)
    let res: any = await fetch("http://localhost:3000/api/users/"+ id, {
      method: "PUT",
      body: JSON.stringify({ name, city }),
    });
    res = await res.json();
    console.log("res", res);
    if (res.success) {
      alert("update sucessfully");
    } else {
      alert(res.result);
    }
  }

  return (
    <div>
      <h1>Update User</h1>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e: any) => setName(e.target.value)}
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="enter city"
        value={city}
        onChange={(e: any) => setCity(e.target.value)}
      />
      <br />
      <br />
      <button onClick={updateUser}>Update user</button>
    </div>
  );
};

export default Page;
