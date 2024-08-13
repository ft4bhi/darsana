import { type NextRequest, NextResponse } from 'next/server';
import { ADMIN_ROUTE, ROOT_ROUTE, SESSION_COOKIE_NAME } from '@/lib/firebase/constants';

// Define admin-protected routes
const adminProtectedRoutes = ['/admin'];

export default function middleware(request: NextRequest) {
  const session = request.cookies.get(SESSION_COOKIE_NAME)?.value || '';

  // Redirect to login if session is not set and user is trying to access an admin route
  if (!session && adminProtectedRoutes.some(route => request.nextUrl.pathname.startsWith(route))) {
    const absoluteURL = new URL(ROOT_ROUTE, request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // Redirect to admin home if session is set and user tries to access root
  if (session && request.nextUrl.pathname === ROOT_ROUTE) {
    const absoluteURL = new URL(ADMIN_ROUTE, request.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}
