import React from "react";

const PrevArrow = () => {
  return (
    <div className="PrevArrow">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={80}
        height={30}
        viewBox="0 0 80 30"
        fill="none"
      >
        <circle cx={15} cy={15} r="12.5" stroke="#EEEBF2" strokeWidth="1.5" />
        <path
          d="M16.875 20C16.875 20 13.125 16.3176 13.125 15C13.125 13.6824 16.875 10 16.875 10"
          stroke="#EEEBF2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx={65} cy={15} r="12.5" stroke="#EEEBF2" strokeWidth="1.5" />
        <path
          d="M63.125 10C63.125 10 66.875 13.6824 66.875 15C66.875 16.3176 63.125 20 63.125 20"
          stroke="#EEEBF2"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default PrevArrow;
