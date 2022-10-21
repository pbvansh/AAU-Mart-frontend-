
import { NextResponse, NextRequest } from 'next/server';
//import JWT from 'jsonwebtoken';

export function middleware(req) {

    // if (req.nextUrl.pathname !== '/login') {
    //     //const token = localStorage.getItem('token');
    //     //const user = JWT.decode(token);
    //     //return NextResponse.next();
    // }


    // if (req.nextUrl.pathname == '/basket') {
    //     console.log(req.nextUrl.pathname);
    //     const response = NextResponse.next()
    //     response.cookies.set('aaumart','pratik')
    //     // ----------Getting cookies from the request--------------------
    //     const cookie = response.cookies.get('aaumart')
    //     console.log(cookie);
    //     //const url = req.nextUrl.clone()
    //    // url.pathname = '/admin'
    //    const loginurl = new URL('/auth',req.nextUrl);
    //    //loginurl.searchParams.set('from',req.nextUrl.pathname)
    //    //return NextResponse.redirect(loginurl)
    // }
    // //const url = req.nextUrl.clone()
    // //url.pathname = '/admin'
    // //return NextResponse.rewrite(url)
    // //const loginURL = new URL('/admin',NextRequest.nextUrl)
    // //console.log(loginURL);
}
