import { clsx, type ClassValue } from "clsx";
import Swal from "sweetalert2";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function buildAlert() {
  Swal.fire({
    title: "Em Construção!",
    text: "Esta funcionalidade ainda está em construção.",
    icon: "info",
    timer: 3000,
    timerProgressBar: true,
    confirmButtonText: "Ok",
  });
}
