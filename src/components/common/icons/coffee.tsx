import React from 'react';

const Coffee: React.FC<{ className?: string; onClick?: () => void }> = ({
  className,
  onClick
}) => {
  return (
    <button onClick={onClick}>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
      >
        <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
      </svg>
    </button>
  );
};

export default Coffee;
