import { AppError } from "@/errors/AppErrors";
import { UserDTO } from "@/types/user-dto";
import { isAxiosError } from "axios";
import { api } from "../api-client";

export const UserService = {
  getUser: async (): Promise<any> => {
    try {
      const response = await api.get("/user");

      return response.data as UserDTO;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new AppError(error);
      }
      throw error;
    }
  },
};
