"use client";

import { Course, CourseDTO } from "@/types/course-dto";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal, ArrowUpDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { buildAlert } from "@/lib/utils";

export const columns: ColumnDef<CourseDTO>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "title",
    header: ({ column }) => {
      return (
        <Link
          href="#"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center"
        >
          Título
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Link>
      );
    },
  },
  {
    accessorKey: "duration",
    header: ({ column }) => (
      <Link
        href="#"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        className="flex items-center"
      >
        <div className="flex flex-col justify-center">
          <span>Duração</span>
          <span className="text-xs text-gray-400">em horas</span>
        </div>
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Link>
    ),
    cell: ({ row }) => {
      const durationInSeconds = parseInt(row.getValue("duration"));
      const hours = Math.floor(durationInSeconds / 3600);
      const minutes = Math.floor((durationInSeconds % 3600) / 60);

      const formatted = `${hours}h ${minutes}min`;
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "teacher",
    header: ({ column }) => {
      return (
        <Link
          href="#"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="flex items-center"
        >
          Professor
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Link>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 w-8 p-0">
              <span className="sr-only">Abrir Menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuItem onClick={buildAlert}>Ver Curso</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
