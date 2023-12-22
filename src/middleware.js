import { NextResponse } from "next/server";

const Middleware = (request) => {
    // console.log(request);
    if(request.nextUrl.pathname != '/login'){
        return NextResponse.redirect(new URL('/login', request.url))
    }
}

export const config = {
    matcher: ['/about/:path+', '/study/:path*']
}

export default Middleware;