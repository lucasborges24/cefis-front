"use client";

import { CREDENTIALS } from "@/lib/keys";
import { CredentialsType } from "@/types/auth-dto";
import Cookies from "js-cookie";

export function getCredentialsCookies(): CredentialsType | null {
  const cookies = Cookies.get(CREDENTIALS);
  const credentials: CredentialsType = cookies ? JSON.parse(cookies) : null;

  return credentials;
}
