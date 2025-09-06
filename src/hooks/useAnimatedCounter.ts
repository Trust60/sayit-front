import { useState, useEffect, useRef } from "react";

interface UseAnimatedCounterProps {
  target: number;
  duration?: number;
  startOnMount?: boolean;
  delay?: number;
}

export function useAnimatedCounter({
  target,
  duration = 2000,
  startOnMount = false,
  delay = 0,
}: UseAnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const animationRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  const startAnimation = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCount(0);

    const animate = (currentTime: number) => {
      if (!startTimeRef.current) {
        startTimeRef.current = currentTime;
      }

      const elapsed = currentTime - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentCount = Math.floor(target * easeOutQuart);

      setCount(currentCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCount(target);
        setIsAnimating(false);
        startTimeRef.current = 0;
      }
    };

    if (delay > 0) {
      setTimeout(() => {
        animationRef.current = requestAnimationFrame(animate);
      }, delay);
    } else {
      animationRef.current = requestAnimationFrame(animate);
    }
  };

  useEffect(() => {
    if (startOnMount) {
      startAnimation();
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [startOnMount, target, duration, delay]);

  return {
    count,
    isAnimating,
    startAnimation,
  };
}
