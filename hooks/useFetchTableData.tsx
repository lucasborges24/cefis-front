"use client";
import { useState, useEffect } from "react";
import { CourseService } from "@/services/apis/course-service";
import { CourseDTO } from "@/types/course-dto";

export function useFetchTableData(page: number, limit: number) {
  const [data, setData] = useState<CourseDTO[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await CourseService.getCourses(page, limit);
        setData(data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page, limit]);

  return { data, loading, error };
}
