"use client";

import Image from "next/image";
import ErrorSVG from "assets/images/error_icon.svg";
import CheckSVG from "assets/images/check_icon.svg";
import { motion } from "framer-motion";

interface MessageInputProps {
  message?: string;
  type?: "error" | "success";
}
export function MessageInput({
  message = "Ocorreu um erro, por favor tente novamente mais tarde.",
  type = "error",
}: MessageInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="mt-1.5 flex items-center gap-2 font-light"
    >
      {type === "error" ? (
        <Image src={ErrorSVG} alt="Ícone de erro" width={20} />
      ) : (
        <Image src={CheckSVG} alt="Ícone de erro" width={20} />
      )}
      {message}
    </motion.div>
  );
}
