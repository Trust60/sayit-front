import { Instagram } from "lucide-react";
import Image from "next/image";

export default function ReviewSwiperCard({
  imageSrc,
  socialName,
  name,
  reviewText,
  bgColor = "#f8f0ff",
}: {
  imageSrc: string;
  socialName: string;
  name: string;
  reviewText: string;
  bgColor?: string;
}) {
  return (
    <div className="bg-card px-4 py-8 rounded-2xl shadow-md flex flex-col items-center gap-6 w-fit min-h-[260px]">
      <div
        className="text-center py-3 w-full rounded-2xl"
        style={{ backgroundColor: bgColor }}
      >
        <p className="text-lg font-semibold text-[#2a2a4a]">{name}</p>
        <div className="flex justify-center gap-2">
          <h3 className="text-sm  text-muted-foreground">{socialName}</h3>
          <Instagram size={18} />
        </div>
      </div>
      <div className="flex items-start gap-4">
        <Image
          src={`/images/${imageSrc}`}
          alt=""
          width={50}
          height={50}
          className="rounded-full"
        />
        <p className="text-sm text-muted-foreground">{reviewText}</p>
      </div>
    </div>
  );
}
