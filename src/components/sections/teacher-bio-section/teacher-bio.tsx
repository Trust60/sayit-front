import StarRating from "@/components/ui/star-rating";
import { Teacher } from "@/types/teacher.interface";
import Image from "next/image";

export default function TeacherBio({ teacher }: { teacher: Teacher }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="bg-card rounded-2xl p-4 border border-border shadow-sm flex flex-col gap-4 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h2 className="text-2xl font-bold">{teacher.full_name}</h2>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground text-sm">Викладає:</span>
            <div className="flex gap-1">
              {teacher.languages?.map((language, index) => (
                <Image
                  key={index}
                  src={`/images/flags/${language}.png`}
                  alt={`${language} flag`}
                  width={24}
                  height={16}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="p-4 rounded-full bg-muted">
          <Image
            src={teacher.profile_image_url}
            alt={teacher.full_name}
            width={250}
            height={250}
            priority
            className="rounded-full"
          />
        </div>
      </div>
      <div className="bg-card rounded-2xl p-4 border border-border shadow-sm">
        <h2 className="text-2xl font-bold mb-2">Біографія</h2>
        <p className="text-secondary-foreground text-sm">{teacher.bio}</p>
        <div className="pt-5 grid grid-cols-2 gap-4">
          <div>
            <p className="text-muted-foreground text-sm">
              Моє місто або регіон
            </p>{" "}
            <p className="text-lg font-bold">
              {teacher.city_of_birth}, {teacher.country_of_birth}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Років досвіду</p>{" "}
            <p className="text-lg font-bold">{teacher.years_of_experience}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Рівень викладання</p>{" "}
            <p className="text-lg font-bold">
              {teacher.teaching_levels?.join(", ")}
            </p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Вартість заняття</p>{" "}
            <p className="text-lg font-bold">${teacher.lesson_rate}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Рейтинг</p>
            <StarRating
              rating={teacher.rating || 0}
              size="lg"
              showNumber={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
