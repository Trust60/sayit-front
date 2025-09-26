import Image from "next/image";

export default function TeacherSwiperCard({
  imageSrc,
  flag,
  name,
  title,
  experience,
}: {
  imageSrc: string;
  flag: string;
  name: string;
  title: string;
  experience: string;
}) {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-md flex flex-col items-center gap-6 w-fit">
      <Image
        src={`/images/${imageSrc}`}
        alt=""
        width={192}
        height={155}
        quality={100}
        priority
        className="rounded-lg"
      />
      <div className="text-center">
        <div className="flex items-center gap-2">
          <Image
            src={`/images/flags/${flag}.png`}
            alt={`${flag} прапор`}
            width={24}
            height={24}
          />
          <h3 className="text-lg font-semibold">{name}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-sm text-muted-foreground">{experience}</p>
      </div>
    </div>
  );
}
