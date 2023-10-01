export type Course = {
  limit: number;
  page: number;
  data: CourseDTO[];
};

export type CourseDTO = {
  id: number;
  title: string;
  duration: number;
  teacher: string;
};
