import { NextRequest, NextResponse } from "next/server";
import { getCredentialsCookiesServer } from "./services/storage/get-credentials-cookies/server-side";

export async function middleware(request: NextRequest) {
  const credentials = getCredentialsCookiesServer();

  if (!credentials)
    return NextResponse.redirect(new URL("/login", request.url));
  else NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
