import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

function CassetteTapeCircles({
  isPlaying,
  animate,
  initial,
  variants,
  ellipseRadius,
}) {
  const radius = "90.5";

  const animation = isPlaying ? ellipseRadius : radius;

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
            ry={radius}
            className="0"
          ></ellipse>
        </g>
        <g>
          <ellipse
            cx="1090.5"
            cy="473.5"
            fill="#7fbfef"
            rx={animation}
            ry={radius}
            className="0"
          ></ellipse>
        </g>
      </g>
    </g>
  );
}

export default CassetteTapeCircles;
