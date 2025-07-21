export default function Section({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <section
      className={`max-w-[850px] xl:max-w-[1140px] mx-auto px-4 py-12 ${
        className || ""
      }`}
    >
      {children}
    </section>
  );
}
