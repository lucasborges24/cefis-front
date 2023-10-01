import { AppError } from "@/errors/AppErrors";
import { Course } from "@/types/course-dto";
import { isAxiosError } from "axios";
import { api } from "../api-client";

export const CourseService = {
  getCourses: async (page: number, limit: number): Promise<Course> => {
    try {
      const response = await api.get(`/course?page=${page}&limit=${limit}`);

      return response.data as Course;
    } catch (error) {
      if (isAxiosError(error)) {
        throw new AppError(error);
      }
      throw error;
    }
  },
};
