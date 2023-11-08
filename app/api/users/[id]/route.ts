import { NextResponse } from 'next/server';
import { user } from '@/utils/db';

export async function GET(res:any) {
   const path = res.url.split('/');
  // console.log("path", typeof path[path.length-1])
  const responseData = user
  //const singleUser = responseData.filter((item)=>item.id === res?.params?.id)
  const singleUser = responseData.filter((item)=>item.id === parseInt(path[path.length-1]))
 // console.log(singleUser)
  return NextResponse.json(
    singleUser.length == 0 ? {result:"No Data Found", success:false} : {result:singleUser,success:true}
  , {status:200});
}