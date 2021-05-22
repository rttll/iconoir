import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const SaveActionFloppy = forwardRef(
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
            d="M8 3H5C3.89543 3 3 3.89543 3 5V7.5M8 3H16M8 3V6M16 3H16.1716C16.702 3 17.2107 3.21071 17.5858 3.58579L20.4142 6.41421C20.7893 6.78929 21 7.29799 21 7.82843V19C21 20.1046 20.1046 21 19 21H18M16 3V8.4C16 8.73137 15.7314 9 15.4 9H13.5M6 21H5C3.89543 21 3 20.1046 3 19V16.5M6 21H18M6 21V17M18 21V13.6C18 13.2686 17.7314 13 17.4 13H15"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1 12H12M12 12L9 9M12 12L9 15"
            stroke="black"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </svg>
    );
  }
);

SaveActionFloppy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

SaveActionFloppy.displayName = 'SaveActionFloppy';

export default SaveActionFloppy;