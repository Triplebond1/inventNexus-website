import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { parse } from "cookie";

export function middleware(req: NextRequest) {
  // Parse cookies from the request header
  const cookieHeader = req.headers.get("cookie") || "";
  const cookies = parse(cookieHeader);
  

  // Retrieve the authentication token and userData from cookies
  const token = cookies.authToken;
  let userData = null;
  if (cookies.userData) {
    try {
      userData = JSON.parse(cookies.userData);
    } catch (error) {
      console.error("Failed to parse userData cookie:", error);
    }
  }

  const { pathname } = req.nextUrl;
  const isAuthPage = pathname.startsWith("/login") || pathname.startsWith("/signup");
  const isProtectedRoute = pathname.startsWith("/dashboard");

  // Redirect unauthenticated users trying to access protected routes.
  if (!token && isProtectedRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If on an auth page and authenticated, redirect based on the user role.
  if (token && isAuthPage && userData) {
    console.log(userData.role.toString() )
    if (userData.role.toString() === "subscriber") {
      // If the user's role is subscriber, redirect to the home page.
      return NextResponse.redirect(new URL("/", req.url));
    } else {
      // Otherwise, redirect to the dashboard.
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
  }

  // Allow the request to proceed if no conditions match.
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/", "/signup"],
};
