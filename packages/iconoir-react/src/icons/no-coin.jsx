import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

export const NoCoin = forwardRef(
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
            d="M4.62323 5.24838C2.99408 7.0274 2 9.39761 2 12C2 17.5228 6.47715 22 12 22C14.5361 22 16.8517 21.0559 18.6146 19.5M21.3021 15.6775C21.7525 14.5392 22 13.2985 22 12C22 6.47715 17.5228 2 12 2C10.7687 2 9.58934 2.22255 8.5 2.62961"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 8.5C14.315 7.81501 13.1087 7.33855 12 7.30872V5.5M9.5 9.50001C9.5 10.6811 10.3525 11.1647 11.3862 11.5M9 15C9.64448 15.8593 10.8428 16.3494 12 16.391M12 16.391V18.5M12 16.391C13.1141 16.431 14.1901 16.0554 14.6973 15.1933"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3 3L21 21"
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

NoCoin.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

NoCoin.displayName = 'NoCoin';

export default NoCoin;