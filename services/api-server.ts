import createAPIService from "./create-api-service";
import { getCredentialsCookiesServer } from "./storage/get-credentials-cookies/server-side";

export async function getAPIServer() {
  const credentials = getCredentialsCookiesServer()!;
  const token = credentials?.token;

  const api = createAPIService(token);

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  return api;
}

export const apiServer = getAPIServer();
