"use client";

import { ReactNode, ElementType } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

interface AnimatedElementProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  animationType?: "slide-up" | "slide-left" | "slide-right" | "scale" | "fade";
  delay?: number;
  threshold?: number;
}

export default function AnimatedElement({
  children,
  as: Component = "div",
  className = "",
  animationType = "slide-up",
  delay = 0,
  threshold = 0.1,
}: AnimatedElementProps) {
  const { elementRef, isVisible } = useScrollAnimation<HTMLElement>({
    threshold,
    triggerOnce: false,
  });

  const animationClasses = {
    "slide-up": "scroll-slide-up",
    "slide-left": "scroll-slide-left",
    "slide-right": "scroll-slide-right",
    scale: "scroll-scale",
    fade: "",
  };

  const delayClasses = {
    1: "scroll-stagger-1",
    2: "scroll-stagger-2",
    3: "scroll-stagger-3",
    4: "scroll-stagger-4",
    5: "scroll-stagger-5",
  };

  const delayClass =
    delay > 0 && delay <= 5
      ? delayClasses[delay as keyof typeof delayClasses]
      : "";

  return (
    <Component
      ref={elementRef}
      className={`scroll-animate ${
        animationClasses[animationType]
      } ${delayClass} ${isVisible ? "is-visible" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
