'use client'
import React, { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const LeftAnimation = ({ children, className }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {

    let observerRefValue : any = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Unobserve the element after animation triggers
          }
        });
      },
      { threshold: 0.1 }
    );

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
    <div ref={ref} className={`LeftAnimation ${className}`}>
      {children}
    </div>
  );
}

export default LeftAnimation;
