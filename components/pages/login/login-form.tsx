"use client";

import { MessageInput } from "@/components/pages/login/message-input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import * as Input from "@/components/ui/input";
import { useLogin } from "@/hooks/useLogin";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import Swal from "sweetalert2";

export function LoginForm() {
  const { onLogin, errors, register, loading } = useLogin();
  const [viewPassword, setViewPassword] = useState<boolean>(false);

  function toggleViewPassword() {
    setViewPassword((prevState) => !prevState);
  }

  const pageNotExistYet = () => {
    Swal.fire({
      title: "Em Construção!",
      text: "Esta funcionalidade ainda está em construção.",
      icon: "info",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonText: "Ok",
    });
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={onLogin}
      className="mt-5 w-full max-w-lg"
    >
      <fieldset className="mb-2 w-full flex-1">
        <Label htmlFor="email">EMAIL</Label>
        <Input.Root data-error={!!errors.email} className="w-full flex-1">
          <Input.Controll
            placeholder="exemplo@gmail.com"
            id="email"
            {...register("email")}
          />
        </Input.Root>
      </fieldset>
      <fieldset className="w-full flex-1">
        <Label htmlFor="password">SENHA</Label>
        <Input.Root data-error={!!errors.password}>
          <Input.Controll
            placeholder="Sua Senha"
            id="password"
            type={viewPassword ? "text" : "password"}
            {...register("password")}
          />
          <Input.Prefix
            onClick={toggleViewPassword}
            className="active:scale-95"
          >
            <button type="button">
              {viewPassword ? (
                <EyeOff className="h-5 w-5" />
              ) : (
                <Eye className="h-5 w-5" />
              )}
            </button>
          </Input.Prefix>
        </Input.Root>
      </fieldset>
      <Link
        href="#"
        className="flex justify-end text-orange-600 text-sm hover:underline hover:decoration-2 my-2 transition ease-in-out duration-500"
        onClick={pageNotExistYet}
      >
        Esqueci minha senha
      </Link>
      <section className="flex flex-col items-center">
        {errors.email ? <MessageInput message={errors.email.message} /> : null}
        {errors.password ? (
          <MessageInput message={errors.password.message} />
        ) : null}
      </section>
      <Button type="submit" variant="solid" size="default" className="my-5">
        {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : "Entrar"}
      </Button>
    </form>
  );
}
