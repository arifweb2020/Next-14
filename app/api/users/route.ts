import { NextResponse } from 'next/server';
import { user } from '@/utils/db';

export async function GET() {
  const responseData = user
  return NextResponse.json(responseData, {status:200});
}

export async function POST(req:any){
    let payload = await req.json()
    console.log("payload", payload)
    if(!payload.name || !payload.city){
        return NextResponse.json({result:"all field is required", success:false},{status:400})
    }
    return NextResponse.json({result:"user created",success:true},{status:201})
}