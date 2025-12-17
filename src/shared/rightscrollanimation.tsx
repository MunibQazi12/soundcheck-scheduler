'use client';
import React, { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const RightScrollAnimation = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing after the animation is triggered
          }
        });
      },
      { threshold: 0.1 }
    );

    let observerRefValue: any = null;

    if (ref.current) {
      observer.observe(ref.current);
      observerRefValue = ref.current;
    }


    return () => {
      if (observerRefValue) {
        observer.unobserve(observerRefValue);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`RightAnimation ${className}`}>
      {children}
    </div>
  );
};

export default RightScrollAnimation;
