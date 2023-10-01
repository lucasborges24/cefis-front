import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-none uppercase w-full flex items-center justify-center py-3 pb-3.5 sm:text-sm text-xs font-semibold tracking-wider font-bold transition-colors disabled:opacity-40 disabled:cursor-not-allowed enabled:active:scale-[0.99] active:shadow-none transition-all duration-150 ease-in-out",
  {
    variants: {
      variant: {
        outline: "bg-white dark-inset-shadow border-2 border-b-2",
        solid: "bg-gray-500 text-white dark-inset-shadow",
        delete: "bg-red-500 text-white dark-inset-shadow",
      },
      size: {
        default: "h-12",
        sm: "h-9 py-2",
        lg: "h-14 py-1",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
