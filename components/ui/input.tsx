import { cn } from "@/lib/utils";
import { ComponentProps, forwardRef } from "react";

type RootProps = ComponentProps<"div">;

function Root({ className, ...rest }: RootProps) {
  return (
    <div
      className={cn(
        "border-app-gray-500 flex w-full items-center gap-2 rounded-none border-2 bg-transparent px-4 py-3 shadow-sm focus-within:border-app-purple-500 data-[error=true]:border-red-500",
        className
      )}
      {...rest}
    />
  );
}

type PrefixProps = ComponentProps<"div">;

function Prefix(props: PrefixProps) {
  return <div {...props} />;
}

export type ControllProps = ComponentProps<"input">;

const Controll = forwardRef<HTMLInputElement, ControllProps>(
  ({ className, type, ...rest }, ref) => {
    return (
      <input
        data-testid="input-controll"
        type={type}
        ref={ref}
        className={cn("flex-1 bg-transparent focus:outline-none", className)}
        {...rest}
      />
    );
  }
);

Controll.displayName = "Input";

export { Controll, Root, Prefix };
