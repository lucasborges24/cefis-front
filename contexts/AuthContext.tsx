"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import { CredentialsType, SignInProps } from "../types/auth-dto";
import { AppError } from "@/errors/AppErrors";
import { setCookies } from "@/services/storage/set-cookies";
import { getCredentialsCookies } from "@/services/storage/get-credentials-cookies/client-side";
import { AuthService } from "@/services/apis/auth-service";
import { UserService } from "@/services/apis/user-service";
import { UserDTO } from "@/types/user-dto";
import { CREDENTIALS } from "@/lib/keys";

export const EXPIRES_HOURS_TOKEN = 24;

interface AuthContextData {
  user: UserDTO | null;
  signIn: (data: SignInProps) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextData);

export function AuthProvider({ children }: AuthProviderProps) {
  const { push } = useRouter();

  const [user, setUser] = useState<UserDTO | null>(null);
  const isAuthenticated = !!user;
  async function loadUser() {
    const credentials = getCredentialsCookies();
    if (!credentials) return;

    try {
      const user = await UserService.getUser();
      setUser(user);
    } catch (error) {
      setUser(null);
      await AuthService.logoutSession();
    }
  }

  useEffect(() => {
    loadUser();
  }, []);

  async function signIn({ email, password }: SignInProps) {
    try {
      const response = await AuthService.signIn({
        email,
        password,
      });
      const credentials: CredentialsType = {
        email,
        token: response?.data.accessToken,
        user: {
          id: response?.data.user.id,
          email: response?.data.user.email,
          name: response?.data.user.name,
          role: response?.data.user.role,
        },
      };

      setCookies(CREDENTIALS, JSON.stringify(credentials), EXPIRES_HOURS_TOKEN);
      setUser(response?.data.user);

      push("/dashboard");
    } catch (error: any) {
      throw new AppError(error);
    }
  }

  async function signOut() {
    try {
      setUser(null);
      await AuthService.logoutSession();
    } catch (error) {}
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextData {
  return useContext(AuthContext);
}
