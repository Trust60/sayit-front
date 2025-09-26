import { Button } from "@/components/ui/button";
import StarRating from "@/components/ui/star-rating";
import Image from "next/image";
import { Teacher } from "@/types/teacher.interface";
import Link from "next/link";

interface TeachersCardProps {
  teacher: Teacher;
}

export default function TeachersCard({ teacher }: TeachersCardProps) {
  const colorSchemes = [
    { bg: "#9EB7E5", gradient: "#648DE5" },
    { bg: "#B8D4E3", gradient: "#7BB8D3" },
    { bg: "#D4A5A5", gradient: "#C48A8A" },
    { bg: "#A5C4A5", gradient: "#8AB88A" },
    { bg: "#E5C4A5", gradient: "#D4A88A" },
    { bg: "#C4A5D4", gradient: "#B08AC4" },
    { bg: "#A5D4C4", gradient: "#8AC4B0" },
    { bg: "#D4C4A5", gradient: "#C4B08A" },
    { bg: "#B5A5D4", gradient: "#A08AC4" },
    { bg: "#A5B5D4", gradient: "#8AA0C4" },
  ];
  const randomScheme =
    colorSchemes[Math.floor(Math.random() * colorSchemes.length)];

  return (
    <div className="flex flex-col gap-4 bg-card rounded-2xl shadow-md p-1">
      <div className="flex items-center relative">
        <div
          className="flex flex-col justify-between p-4 h-[200px] w-3/5 rounded-l-2xl"
          style={{ backgroundColor: randomScheme.bg }}
        >
          <h2 className="text-lg font-semibold">
            {teacher.full_name || "Викладач"}
          </h2>
          <Link href={`/teacher/${teacher.id}`}>
            <Button
              variant="outline"
              className="w-fit border bg-transparent border-foreground text-foreground rounded-2xl"
            >
              Детальніше
            </Button>
          </Link>
        </div>
        <div className="flex relative w-2/5 overflow-hidden">
          <Image
            src={
              teacher.profile_image_url ||
              "/images/openart-image_jYLSHm1-_1753109152282_raw.jpg"
            }
            alt={teacher.full_name || "teacher"}
            width={200}
            height={200}
            className="h-[200px] object-cover object-top rounded-r-2xl"
          />
          <div className="absolute -bottom-20 -left-20">
            <div
              className="w-[200px] h-[200px] rounded-full blur-sm"
              style={{
                background: `radial-gradient(circle, ${randomScheme.gradient} 0%, transparent 70%)`,
              }}
            ></div>
          </div>
          <p className="absolute bottom-0 left-0 text-sm text-card p-5 font-semibold">
            {teacher.full_name}
          </p>
        </div>
      </div>
      <div className="px-4">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-muted-foreground">
            Навчає з{" "}
            {new Date().getFullYear() - (teacher.years_of_experience || 0)} року
          </p>
          {teacher.rating && (
            <StarRating rating={teacher.rating} size="sm" showNumber={true} />
          )}
        </div>
        <p className="text-lg font-semibold">{teacher.full_name}</p>
        <p>{teacher.bio}</p>
      </div>
    </div>
  );
}
