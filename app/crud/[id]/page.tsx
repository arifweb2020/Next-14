import React from 'react';

const fetchUserData = async (id: number) => {
  const res = await fetch(`http://localhost:3000/api/users/${id}`);
  const finalData = await res.json();
  return finalData.result; // Assuming result is an object with 'name' and 'city'
};

const page = async ({ params }: any) => {
  const data: any = await fetchUserData(params.id);
  
  return (
    <div>
      <h1>Single user Data</h1>
      {data === "No Data Found" ? (
        <p>No Data Found</p>
      ) : (
        <>
          <p>Name : {data?.name}</p>
          <p>City : {data?.city}</p>
        </>
      )}
    </div>
  );
};

export default page;
