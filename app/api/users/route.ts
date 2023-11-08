import { NextResponse } from 'next/server';
import { user } from '@/utils/db';

export async function GET() {
  const responseData = user
  return NextResponse.json(responseData, {status:200});
}