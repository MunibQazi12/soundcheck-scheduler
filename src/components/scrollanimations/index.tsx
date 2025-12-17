// import React, { ReactNode, useEffect, useRef } from 'react';

// interface Props {
//   children: ReactNode
// }

// const ScrollAnimation = ({ children }: Props) => {

//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('active');
//           } else {
//             entry.target.classList.remove('active');
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, []);
//   return (
//     <div ref={ref} className='BottomAnimation'>
//       {children}
//     </div>
//   )
// }

// export default ScrollAnimation