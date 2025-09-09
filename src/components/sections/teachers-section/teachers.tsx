import TeachersCard from "./teachers-card";

export default function TeachersSection() {
  return (
    <div className="max-w-[850px] xl:max-w-[1140px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-10">
        <TeachersCard />
        <TeachersCard />
        <TeachersCard />
      </div>
    </div>
  );
}
