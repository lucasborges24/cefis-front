import { CREDENTIALS } from "@/lib/keys";
import { CredentialsType } from "@/types/auth-dto";
import { cookies } from "next/headers";

export function getCredentialsCookiesServer(): CredentialsType | null {
  const credentialsCookies = cookies().get(CREDENTIALS)?.value;
  const credentials: CredentialsType = credentialsCookies
    ? JSON.parse(credentialsCookies)
    : null;

  return credentials;
}
