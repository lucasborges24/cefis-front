"use client";

import { AppError } from "@/errors/AppErrors";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useAuth } from "@/contexts/AuthContext";

const schema = z.object({
  email: z.string().email("Digite um email válido."),
  password: z.string().min(8, "Senha precisa ter mais que 8 caracteres"),
});

type FormData = z.infer<typeof schema>;

const defaultValues = {
  password: "",
  email: "",
};

export function useLogin() {
  const { signIn } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    register,
    setError,
  } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  function handleErrors(error: AppError, setError: any, addInfos?: any) {
    switch (error.statusCode) {
      case 404:
        setError("email", { message: "Email não encontrado" });
        break;
      case 401:
        setError("password", { message: "Email ou senha inválidos" });
        break;
      case 500:
        setError("password", {
          message: "Ocorreu um erro interno, tente novamente mais tarde",
        });
        break;
      case 403:
        router.push(
          `/password/reset?email=${addInfos?.email}&first_access=true`
        );
        break;
      default:
        setError("password", {
          message: "Ocorreu um erro interno, tente novamente mais tarde",
        });
        break;
    }
  }

  async function onSubmit({ email, password }: FormData) {
    setLoading(true);
    try {
      await signIn({ email, password });
    } catch (error: any) {
      setLoading(false);
      if (error instanceof AppError) {
        handleErrors(error, setError, {
          email,
        });
      }
    } finally {
      setLoading(false);
    }
  }

  return {
    onLogin: handleSubmit(onSubmit),
    register,
    errors,
    loading,
  };
}
