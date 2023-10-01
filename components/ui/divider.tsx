interface DividerProps {
  text: string;
}

export function Divider({ text }: DividerProps) {
  return (
    <div className="flex w-full items-center gap-2 py-5">
      <div className="h-[0.5px] w-full bg-black" />
      <span className="text-center text-sm w-full lg:w-2/3">{text}</span>
      <div className="h-[0.5px] w-full bg-black" />
    </div>
  );
}
