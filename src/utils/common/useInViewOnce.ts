import { useEffect, useRef, useState } from "react";

export const useInViewOnce = <T extends Element>() => {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current || inView) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "120px" },
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [inView]);

  return { ref, inView };
};
