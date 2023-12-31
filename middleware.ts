import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
   // if(request.nextUrl.pathname != '/user-list'){
  return NextResponse.redirect(new URL('/', request.url))
//}
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/about/:path*',
  //  matcher: ['/about/:path*', '/services/:path*'],
  // for nexted routing block
  //   matcher: ['/about/company-profile:path*', '/services/:path*'],
}