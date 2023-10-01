import { AuthPageTitle } from "@/components/pages/login/auth-title";
import { LoginForm } from "@/components/pages/login/login-form";
import SignUpRecomendation from "@/components/pages/login/sign-up-recomention";
import { getCredentialsCookiesServer } from "@/services/storage/get-credentials-cookies/server-side";
import { redirect } from "next/navigation";

export default function Login() {
  const credentials = getCredentialsCookiesServer();
  if (credentials) {
    redirect("/dashboard");
  }
  return (
    <>
      <AuthPageTitle title="Seja Bem vindo(a) à CEFIS" />
      <LoginForm />
      <SignUpRecomendation />
    </>
  );
}
