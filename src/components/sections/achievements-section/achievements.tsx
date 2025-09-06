"use client";

import { useMemo } from "react";
import { useAnimatedCounter } from "@/hooks/useAnimatedCounter";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Achievement {
  id: string;
  value: string;
  label: string;
  numericValue?: number;
}

interface AchievementsSectionProps {
  achievements?: Achievement[];
  className?: string;
}

const defaultAchievements: Achievement[] = [
  {
    id: "students",
    value: "10k+",
    label: "Студентів досягли своєї мети",
    numericValue: 10000,
  },
  {
    id: "teachers",
    value: "100",
    label: "Вчителів у нашій команді",
    numericValue: 100,
  },
  {
    id: "programs",
    value: "20",
    label: "Авторських програм",
    numericValue: 20,
  },
  {
    id: "years",
    value: "5",
    label: "років допомагаємо говорити англійською",
    numericValue: 5,
  },
];

function AchievementItem({
  achievement,
  index,
}: {
  achievement: Achievement;
  index: number;
}) {
  const { elementRef, hasIntersected } = useIntersectionObserver({
    threshold: 0.3,
    triggerOnce: true,
  });

  const { count, isAnimating } = useAnimatedCounter({
    target: achievement.numericValue || 0,
    duration: 2000,
    startOnMount: hasIntersected,
    delay: index * 200,
  });

  const displayValue = useMemo(() => {
    if (!achievement.numericValue) return achievement.value;

    if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}k+`;
    }
    return count.toString();
  }, [count, achievement.numericValue, achievement.value]);

  return (
    <div
      ref={elementRef}
      className={`flex items-center gap-2 transition-all duration-700 ${
        hasIntersected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      role="listitem"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span
        className={`font-bold text-3xl transition-all duration-300 ${
          isAnimating ? "scale-110" : "scale-100"
        }`}
        aria-label={`${displayValue} ${achievement.label}`}
      >
        {displayValue}
      </span>
      <span className="text-foreground text-xl">{achievement.label}</span>
    </div>
  );
}

export default function AchievementsSection({
  achievements = defaultAchievements,
  className = "",
}: AchievementsSectionProps) {
  return (
    <section
      className={`flex flex-col gap-4 ${className}`}
      aria-label="Наші досягнення"
      role="list"
    >
      {achievements.map((achievement, index) => (
        <AchievementItem
          key={achievement.id}
          achievement={achievement}
          index={index}
        />
      ))}
    </section>
  );
}
