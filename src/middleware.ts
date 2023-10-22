import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
    console.log('middleware')
    console.log(req.url)

    const response = NextResponse.next({ 
        request : { headers : req.headers, },
    })

    if (req.cookies.has('x-custom-auth-header') && req.cookies.get('x-custom-auth-header').value == 'isAuthed')
    {
        return NextResponse.next();
    }

    response.cookies.set("x-redirect-url", req.url); 
    return NextResponse.redirect("http://login.kavishdoshi.com/signup");
}

export const config = {
    matcher: ['/', '/about', '/projects'],
}
