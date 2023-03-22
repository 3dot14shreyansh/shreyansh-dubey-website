import React from 'react';

const Books: React.FC<{ className?: string; onClick?: () => void }> = ({
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
        <path d="M9 3V18H12V3H9M12 5L16 18L19 17L15 4L12 5M5 5V18H8V5H5M3 19V21H21V19H3Z" />
      </svg>
    </button>
  );
};

export default Books;
