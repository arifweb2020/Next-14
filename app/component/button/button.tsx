"use client"
import React from 'react'

interface ButtonProps{
    userId?:number;
    text:string
}
const Button:React.FC<ButtonProps> = ({userId,text}) => {
console.log("userId", userId)
    const delUser = async ()=>{
        let result:any = await fetch('http://localhost:3000/api/users/'+userId,{
            method:"DELETE"
        })
        result = await result.json()
        if(result.success){
            alert(result.result)
        }
        else{
            alert(result.result)
        }
    }
  return (
    <>
    <button onClick={delUser} style={{marginLeft:'30px',color:'green'}}>{text}</button>
    </>
  )
}

export default Button