import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const Dollar = forwardRef(
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
            d="M16.1538 7.15382C15.2054 6.20538 13.5351 5.54568 12 5.50437M7.84619 16.1538C8.73855 17.3436 10.3977 18.0222 12 18.0798M12 5.50437C10.1735 5.45522 8.5385 6.2815 8.5385 8.53845C8.5385 12.6923 16.1538 10.6154 16.1538 14.7692C16.1538 17.1383 14.127 18.1562 12 18.0798M12 5.50437V3M12 18.0798V20.9999"
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

Dollar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Dollar.displayName = 'Dollar';

export default Dollar;