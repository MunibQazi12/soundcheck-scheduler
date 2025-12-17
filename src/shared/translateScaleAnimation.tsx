'use client';
import React, { ReactNode, useEffect, useRef } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const TranslateScaleAnimation = ({ children, className }: Props) => {

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !ref.current?.classList.contains('animated')) {
            const target = entry.target as HTMLDivElement;
            target.classList.add('active');
            target.classList.add('animated'); // Add the 'animated' class to ensure it runs only once
          }
        });
      },
      { threshold: 0.1 }
    );

    let observerRefValue : any = null;

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
    <div ref={ref} className={`translateScaleAnimation ${className}`}>
      {children}
    </div>
  )
}

export default TranslateScaleAnimation
