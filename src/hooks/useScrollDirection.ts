import { useEffect, useState } from "react";

type ScrollDirection = "up" | "down" | null;

export const useScrollDirection = (): ScrollDirection => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction: ScrollDirection = scrollY > lastScrollY ? "down" : "up";

      if (scrollY == 0) {
        setScrollDirection(null);
      } else if (direction !== scrollDirection && Math.abs(scrollY - lastScrollY) > 3) {
        setScrollDirection(direction);
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
    };

    window.addEventListener("scroll", updateScrollDirection);

    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
};
