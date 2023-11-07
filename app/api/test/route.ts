import { NextResponse } from 'next/server';

export async function GET() {
  const responseData = { message: 'arif' };
  return NextResponse.json(responseData);
}
