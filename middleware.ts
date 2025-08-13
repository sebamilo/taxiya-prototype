
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Guard simple de rutas protegidas
export function middleware(req: NextRequest) {
  const role = req.cookies.get("taxiya_role")?.value;
  const { pathname } = req.nextUrl;

  // Protege /pasajero y /taxista
  if (pathname.startsWith("/pasajero")) {
    if (role !== "pasajero") {
      const url = new URL("/login", req.url);
      return NextResponse.redirect(url);
    }
  }
  if (pathname.startsWith("/taxista")) {
    if (role !== "taxista") {
      const url = new URL("/login", req.url);
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/pasajero/:path*", "/taxista/:path*"],
};
