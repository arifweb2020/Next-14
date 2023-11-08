import { NextResponse } from 'next/server';

export async function GET(res:any) {
const data = res
console.log("teacher", data)
  const responseData = {
    result:data,
    status: 200
  };
  return NextResponse.json(responseData);
}