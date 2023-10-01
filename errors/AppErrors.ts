import { AxiosError } from "axios";

export class AppError {
  message: string;
  statusCode: number;

  constructor(error: AxiosError) {
    this.message = (error.response?.data as string) ?? error.message;
    this.statusCode = error.response?.status ?? 500;
  }
}
