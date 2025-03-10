
import { useEffect, useRef, useState } from "react";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  animation?: "fade-in" | "slide-up" | "scale-in";
}

const AnimatedSection = ({
  children,
  className = "",
  delay = 0,
  threshold = 0.2,
  animation = "fade-in",
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  let animationClass = "";
  switch (animation) {
    case "fade-in":
      animationClass = "opacity-0 animate-fade-in";
      break;
    case "slide-up":
      animationClass = "opacity-0 animate-slide-up";
      break;
    case "scale-in":
      animationClass = "opacity-0 animate-scale-in";
      break;
    default:
      animationClass = "opacity-0 animate-fade-in";
  }

  return (
    <div
      ref={sectionRef}
      className={`${className} ${isVisible ? animationClass : "opacity-0"}`}
      style={{ animationDelay: `${delay}ms`, animationFillMode: "forwards" }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
