import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token"); // Get the authentication token

  const isAuthPage = req.nextUrl.pathname.startsWith("/login") || req.nextUrl.pathname.startsWith("/signup");
  const isProtectedRoute = req.nextUrl.pathname.startsWith("/dashboard");

  if (!token && isProtectedRoute) {
    // Redirect to login if the user is trying to access a protected route
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && isAuthPage) {
    // Redirect logged-in users away from login/register pages
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  return NextResponse.next(); // Continue to the requested page
}

// **Apply middleware only to specific routes**
export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
