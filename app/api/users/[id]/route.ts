import { NextResponse } from 'next/server';
import { user } from '@/utils/db';

export async function GET(res:any) {
   const path = res.url.split('/');
  // console.log("path", typeof path[path.length-1])
  const responseData = user
  //const singleUser = responseData.filter((item)=>item.id === res?.params?.id)
  const singleUser = responseData.filter((item)=>item.id === parseInt(path[path.length-1]))
 //console.log(singleUser[0], "test")
  return NextResponse.json(
    singleUser.length == 0 ? {result:"No Data Found", success:false} : {result:singleUser[0],success:true}
  , {status:200});
}

export async function PUT(req:any,res:any){
    let payload = await req.json();
   // const userId = res.params.id
   payload.id= res.params.id
    console.log("payload1", payload)
    if(!payload.name || !payload.city || !payload.id){
        return NextResponse.json({result:"all field is required", success:false},{status:400})
    }
    return NextResponse.json({result:payload,success:true},{status:200})
   
}

export function DELETE(req:any,res:any){
    let id = res.params.id
    console.log("del",id)
    if(id){
        return NextResponse.json({result:"User deleted",success:true},{status:200})
    }
    else{
        return NextResponse.json({result:"Internal error",success:false},{status:400})
    }
}