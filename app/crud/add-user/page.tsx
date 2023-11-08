"use client";
import React, { useState } from "react";

const AddUser = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");

  const clearInputFields = () => {
    setName("");
    setCity("");
  };

  const addUser = async () => {
    console.log(name, city);
    let res: any = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify({ name, city }),
    });
    res = await res.json();
    console.log("res", res);
    if (res.success) {
      alert(res.result);
     clearInputFields();
    } else {
      alert(res.result);
    }
  };
  

  return (
    <div>
      <h1>Add New User</h1>
      <br />

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
      <button onClick={addUser}>Add user</button>
    </div>
  );
};

export default AddUser;
