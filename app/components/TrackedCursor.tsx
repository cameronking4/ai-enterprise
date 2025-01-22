import React, { useEffect, useState } from "react";
import { useMotionValue, AnimatePresence } from "framer-motion";
import { FollowPointer } from "./cursor";
import { cn } from "../../lib/utils"; // Make sure you have this utility

interface TrackedCursorProps {
  className?: string;
  title?: string;
}

export const TrackedCursor: React.FC<TrackedCursorProps> = ({
  className,
  title,
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    // Set initial visibility
    setIsVisible(true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <AnimatePresence>
      {isVisible && (
        <div
          className={cn(
            "fixed top-0 left-0 w-screen h-screen pointer-events-none z-50 cursor-none",
            className
          )}
          style={{ cursor: "none" }}
        >
          <FollowPointer x={mouseX} y={mouseY} title={title} />
        </div>
      )}
    </AnimatePresence>
  );
};
