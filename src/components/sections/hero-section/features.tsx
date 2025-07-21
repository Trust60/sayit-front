export default function Features({ vertical = false }: { vertical?: boolean }) {
  const arr = ["1 на 1 та в групах", "В онлайн-екосистемі", "По спецпрограмах"];
  return (
    <div
      className={`gap-4 items-center justify-center ${
        vertical
          ? "flex flex-col md:hidden"
          : "hidden md:flex md:flex-wrap gap-8 items-start"
      }`}
    >
      {arr.map((txt, i) => (
        <div
          key={txt}
          className={`bg-[#fff]/[30%] border-2 border-violet-100/50 rounded-2xl px-4 py-2 md:px-8 md:py-6 ${
            !vertical && i === 0 ? "-rotate-[10deg]" : ""
          } ${!vertical && i === 1 ? "rotate-[6deg]" : ""} ${
            !vertical && i === 2 ? "-rotate-[8deg]" : ""
          }`}
        >
          <h3 className="text-violet-100 font-bold text-base md:text-xl">
            {txt}
          </h3>
        </div>
      ))}
    </div>
  );
}
