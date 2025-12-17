'use client'
import React, { ReactNode, useEffect, useRef, useState } from 'react';

interface Props {
    children: ReactNode;
    removeClass?: number;
    className?: string;
}

const ScrollAnimation = ({ children, className, removeClass = 0 }: Props) => {
    const ref = useRef<HTMLDivElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        entry.target.classList.add('active');
                        setHasAnimated(true); // Mark as animated
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
    }, [hasAnimated]);

    useEffect(() => {
        if (removeClass && ref.current) {
            if (hasAnimated) {
                ref.current.classList.remove('active');
                setTimeout(() => {
                    if (ref.current) {
                        ref.current.classList.add('active');
                    }
                }, 500);
            }
        }
    }, [removeClass, hasAnimated]);

    return (
        <div ref={ref} className={`BottomAnimation lg:w-auto w-full ${className}`}>
            {children}
        </div>
    )
}

export default ScrollAnimation;
