import React from 'react';

const AnyMesonGlow = ({ width = 25, height = 25 }) => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="orange"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path className="star star1" d="M19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25L19 9z" />
        <path className="star star2" d="M11.5 9.5L9 4 6.5 9.5 1 12l5.5 2.5L9 20l2.5-5.5L17 12l-5.5-2.5z" />
        <path className="star star3" d="M19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25L19 15z" />
      </svg>

      <style>{`
        .star {
          fill: orange;
          filter: drop-shadow(0 0 2px orange);
          animation: glow 1.5s infinite;
        }

        .star1 { animation-delay: 0s; }
        .star2 { animation-delay: 0.5s; }
        .star3 { animation-delay: 1s; }

        @keyframes glow {
          0%, 100% {
            filter: drop-shadow(0 0 2px orange);
            transform: scale(1);
          }
          50% {
            filter: drop-shadow(0 0 10px orange);
            transform: scale(1.2);
          }
        }
      `}</style>
    </>
  );
};

export default AnyMesonGlow;
