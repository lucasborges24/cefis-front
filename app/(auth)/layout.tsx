import Image from "next/image";
import LogoCefis from "assets/images/logo-cefis-ebooks.png";
import { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <section className="bg-background-light-paper flex min-h-screen justify-center px-5">
      <section className="flex w-full flex-col items-center justify-center gap-5 md:w-1/2">
        <Image
          priority={true}
          src={LogoCefis}
          alt="Logo Cefis"
          width={140}
          className="mt-5 md:mb-8"
        />
        {children}
      </section>
    </section>
  );
}
