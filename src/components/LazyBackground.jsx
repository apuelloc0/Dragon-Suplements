import React, { useEffect, useRef } from 'react';
import "../cssfolder/Checkout.css";

const LazyBackground = ({ src, className, children }) => {
  const bgRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bgRef.current.style.backgroundImage = `url(${src})`;
            observer.unobserve(bgRef.current);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(bgRef.current);

    return () => {
      if (bgRef.current) {
        observer.unobserve(bgRef.current);
      }
    };
  }, [src]);

  return (
    <div ref={bgRef} className={className}>
      {children}
    </div>
  );
};

export default LazyBackground;
