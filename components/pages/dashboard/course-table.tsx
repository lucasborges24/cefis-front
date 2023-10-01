"use client";
import { columns } from "./columns";
import { DataTable } from "./datatable";
import { Course, CourseDTO } from "@/types/course-dto";
import { CourseService } from "@/services/apis/course-service";
import { useEffect, useState } from "react";
import { useFetchTableData } from "@/hooks/useFetchTableData";
import { TableRowSkeleton } from "./table-row-skeleton";

export default function CourseDataTable() {
  const { data, loading, error } = useFetchTableData(1, 100);
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} loading={loading} />
    </div>
  );
}
