interface AuthPageTitleProps {
  title: string;
}

export function AuthPageTitle({ title }: AuthPageTitleProps) {
  return (
    <>
      <h1 className="text-center text-lg font-extrabold tracking-wider sm:text-xl md:text-2xl">
        {title}
      </h1>
    </>
  );
}
