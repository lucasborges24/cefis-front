"use client";

import createAPIService from "./create-api-service";
import { getCredentialsCookies } from "./storage/get-credentials-cookies/client-side";

export function getAPIClient() {
  const credentialsCookies = getCredentialsCookies();
  const token = credentialsCookies?.token;

  const api = createAPIService(token);

  api.interceptors.request.use((config) => {
    if (token) {
      config.headers["authorization"] = `Bearer ${token}`;
    }
    return config;
  });

  return api;
}

export const api = getAPIClient();
