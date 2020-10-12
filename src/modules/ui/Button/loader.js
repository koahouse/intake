import React from 'react';

export const Loader = () => (
  <svg
    height="16px"
    preserveAspectRatio="xMidYMid"
    viewBox="0 0 22 22"
    width="16px"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="11"
      cy="11"
      fill="none"
      r="8"
      stroke="#ccc"
      strokeDasharray="36 12"
      strokeWidth="3"
    >
      <animateTransform
        attributeName="transform"
        dur="1.2s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 11 11;360 11 11"
      ></animateTransform>
    </circle>
  </svg>
);
