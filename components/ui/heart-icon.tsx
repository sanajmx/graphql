
import React from "react";

const HeartIcon = ({ className = "", width = 24, height = 24 }: { className?: string, width?: number, height?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    width={width}
    height={height}
    className={className}
    fill="#FF6EC7" // allows you to control color with CSS
  >
    <path d="M305 151.1L320 171.8L335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1L576 231.7C576 343.9 436.1 474.2 363.1 529.9C350.7 539.3 335.5 544 320 544C304.5 544 289.2 539.4 276.9 529.9C203.9 474.2 64 343.9 64 231.7L64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1z"/>
  </svg>
);

export default HeartIcon;
