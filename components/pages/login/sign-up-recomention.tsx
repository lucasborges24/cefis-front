"use client";
import { Button } from "@/components/ui/button";
import { Divider } from "@/components/ui/divider";
import Swal from "sweetalert2";

export default function SignUpRecomendation() {
  const pageNotExistYet = () => {
    Swal.fire({
      title: "Em Construção!",
      text: "Esta funcionalidade ainda está em construção.",
      icon: "info",
      timer: 3000,
      timerProgressBar: true,
      confirmButtonText: "Ok",
    });
  };

  return (
    <section className="w-full max-w-lg">
      <Divider text="Novo na CEFIS?" />
      <Button
        type="submit"
        variant="outline"
        size="sm"
        className=""
        onClick={pageNotExistYet}
      >
        CRIAR UMA CONTA NA CEFIS
      </Button>
    </section>
  );
}
