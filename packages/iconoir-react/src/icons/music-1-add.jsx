import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Music1Add = forwardRef(
  ({ color = 'currentColor', size = 24 }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        color={color}
        xmlns="http://www.w3.org/2000/svg"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17 6.5H20M23 6.5H20M20 6.5V3.5M20 6.5V9.5"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 13.9999V16.9999C15 18.1045 14.1046 18.9999 13 18.9999H12C10.8954 18.9999 10 18.1045 10 16.9999V15.9999C10 14.8953 10.8954 13.9999 12 13.9999H15ZM15 13.9999V9.99992M6 15.9999V4.99992L14 4M6 15.9999V18.9999C6 20.1045 5.10457 20.9999 4 20.9999H3C1.89543 20.9999 1 20.1045 1 18.9999V17.9999C1 16.8953 1.89543 15.9999 3 15.9999H6Z"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

Music1Add.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Music1Add.displayName = 'Music1Add';

export default Music1Add;