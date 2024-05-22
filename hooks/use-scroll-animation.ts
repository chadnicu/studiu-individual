"use client";

import { useEffect } from "react";

export function useScrollAnimation({ cssClass }: { cssClass: string }) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
            entry.target.classList.remove("animate-fadeOut");
          } else {
            entry.target.classList.remove("animate-fadeIn");
            entry.target.classList.add("animate-fadeOut");
          }
        });
      },
      {
        root: document.querySelector("#scrollArea"),
        rootMargin: `0px 0px ${window.innerWidth < 1500 ? "-30%" : "-20%"} 0px`,
        threshold: 0,
      },
    );
    const targets = document.querySelectorAll(`.${cssClass}`);
    targets.forEach(function (target) {
      target.classList.add("animate-fadeOut");
      observer.observe(target);
    });
  }, [cssClass]);
}
