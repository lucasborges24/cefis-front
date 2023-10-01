import { AuthPageTitle } from "@/components/pages/login/auth-title";
export default function Login() {
  const credentials = getCredentialsCookiesServer();
  if (credentials) {
    redirect("/dashboard");
  }
  return (
      <AuthPageTitle title="Seja Bem vindo(a) à CEFIS" />
  );
}
