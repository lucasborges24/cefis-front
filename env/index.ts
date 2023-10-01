import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_API_AMBIENTE: z
    .enum(["development", "production", "test"])
    .default("development"),
  NEXT_PUBLIC_API_URL: z.string().default(""),
});

const _env = envSchema.safeParse(process.env);
if (!_env.success) {
  throw new Error("Invalid environment variables", _env.error);
}

export const env = _env.data;
