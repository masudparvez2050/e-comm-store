import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Example middleware for admin routes protection
  // In a real app, you would check for a valid admin session/token
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
  const isAdminAuthRoute = request.nextUrl.pathname.startsWith("/admin/auth");

  // Mock authentication check - in a real app, this would check cookies/session
  const isAuthenticated = true; // This would be a real check in production

  // If trying to access admin routes without authentication
  if (isAdminRoute && !isAdminAuthRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL("/admin/auth/login", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    // Skip all internal paths (_next, api, static files)
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
