import React from "react";

function CassetteTapeCircles({ isPlaying, initialRadius, ellipseRadius }) {
  const animation = isPlaying ? ellipseRadius : initialRadius;

  return (
    <g>
      <g>
        <rect
          width="242"
          height="96"
          x="1082"
          y="424.5"
          fill="#fff"
          rx="0"
          ry="0"
          className="0"
        ></rect>
      </g>
      <g>
        <g>
          <ellipse
            cx="1332.5"
            cy="473.5"
            fill="#7fbfef"
            rx={animation}
            ry={animation}
            className="0"
          ></ellipse>
        </g>
        <g>
          <ellipse
            cx="1090.5"
            cy="473.5"
            fill="#7fbfef"
            rx={animation}
            ry={animation}
            className="0"
          ></ellipse>
        </g>
      </g>
    </g>
  );
}

export default CassetteTapeCircles;
