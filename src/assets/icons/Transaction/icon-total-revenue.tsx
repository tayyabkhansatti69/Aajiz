import { SvgIcon, SvgIconProps } from "@mui/material";
import React from "react";

function IconTotalRevenue(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 22L16 29L28 22"
          stroke="#55BEE6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 16L16 23L28 16"
          stroke="#55BEE6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 10L16 17L28 10L16 3L4 10Z"
          stroke="#55BEE6"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </SvgIcon>
  );
}

export default IconTotalRevenue;
