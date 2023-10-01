import { ComponentProps, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const labelVariants = cva("text-xs font-medium text-gray-700 block my-1", {
  variants: {
    variant: {
      primary: "text-app-purple-500",
      error: "text-red-500",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export interface LabelProps
  extends ComponentProps<"label">,
    VariantProps<typeof labelVariants> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ children, className, variant, ...props }, ref) => {
    return (
      <label
        className={cn(labelVariants({ variant, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </label>
    );
  }
);

Label.displayName = "Label";

export { Label, labelVariants };
