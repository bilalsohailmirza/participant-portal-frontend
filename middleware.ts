import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAuthStatus } from './utils/middleware-utils'

export function middleware(request: NextRequest) {

    // const userAuthStatus = getAuthStatus()
    const authToken = request.cookies.get('authToken');

    const authRoutes = ['/login', '/signup']
    const profileRoute = ['/profile']
    if(!authToken && profileRoute.includes(request.nextUrl.pathname)){
        
        const absoluteURL = new URL("/", request.url);
        return NextResponse.redirect(absoluteURL.toString());
    }
    if(authToken && authRoutes.includes(request.nextUrl.pathname)){

        const absoluteURL = new URL("/", request.url);
        return NextResponse.redirect(absoluteURL.toString());
        
    }

}

