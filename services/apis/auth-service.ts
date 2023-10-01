import { isAxiosError } from "axios";
import { api } from "../api-client";
import { SignInProps } from "@/types/auth-dto";
import Cookies from "js-cookie";
import { CREDENTIALS } from "@/lib/keys";

export const AuthService = {
  signIn: async ({ email, password }: SignInProps) => {
    try {
      const response = await api.post("/auth/login", {
        email,
        password,
      });

      const { data } = response;
      const token = data.accessToken;

      if (token) {
        api.defaults.headers["authorization"] = `Bearer ${token}`;
      }

      return {
        data,
        token,
      };
    } catch (error: any) {
      if (isAxiosError(error)) {
        throw error;
      }
      throw new Error(error.message);
    }
  },

  logoutSession: async () => {
    Cookies.remove(CREDENTIALS);
    window.location.href = "/login";
  },
};
