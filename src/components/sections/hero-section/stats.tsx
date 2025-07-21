import { School, Star, UsersRound } from "lucide-react";

export default function Stats({ className = "" }) {
  const stats = [
    { icon: UsersRound, label: "Задоволених студентів", value: "98%" },
    { icon: School, label: "Онлайн-шкіл", value: "TOP 3" },
    { icon: Star, label: "Середня оцінка викладачів", value: "4.9/5" },
  ];
  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {stats.map(({ icon: Icon, label, value }) => (
        <div
          key={label}
          className="flex flex-col items-center text-violet-100 font-semibold text-sm gap-1"
        >
          <div className="flex items-center gap-2">
            <Icon size={18} className="text-violet-100" />
            <p>{value}</p>
          </div>
          <p className="text-center">{label}</p>
        </div>
      ))}
    </div>
  );
}
