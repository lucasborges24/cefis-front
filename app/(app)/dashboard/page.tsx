import CourseDataTable from "@/components/pages/dashboard/course-table";
import DashboardTitle from "@/components/pages/dashboard/title";
import { apiServer } from "@/services/api-server";

export default async function HomePage() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center p-5">
      <DashboardTitle title="Cursos" />
      <CourseDataTable />
    </section>
  );
}
