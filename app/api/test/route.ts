import { NextResponse } from 'next/server';

export async function GET() {
  const responseData = {
    data: { name: 'arif', age: 28, city: 'bangalore' },
    status: 200
  };
  return NextResponse.json(responseData);
}
