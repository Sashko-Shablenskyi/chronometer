"use strict";

import { getTime } from "./getTime/getTime.js";

const showResult = document.getElementById("showResult");

showResult.width = document.documentElement.clientWidth;
showResult.height = showResult.width;

export const ctx = showResult.getContext("2d");
export const showResultRadius = showResult.width / 2 - 15;
export const centerX = showResult.width / 2;
export const centerY = showResult.height / 2;

// -----ANALOG CLOCK STYLES-----

export const arrowsStyles = {
  hourArrowLength: showResultRadius * 0.6,
  hourArrowWidth: 9,
  minuteArrowLength: showResultRadius * 0.8,
  minuteArrowWidth: 7,
  secondArrowLength: showResultRadius * 0.85,
  secondArrowWidth: 2,
  arrowGradient: {
    start: "#0D8AFC",
    end: "#33F0B0",
  },
};

export const bigCircleStyles = {
  shadowColor: "rgba(22, 25, 36, 0.1)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 15,
  fillStyle: "#fff",
  radius: showResultRadius,
};

export const middleCircleStyles = {
  shadowColor: "rgba(201, 210, 226, 0.6)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 70,
  fillStyle: "#fff",
  radius: showResultRadius - 60,
};

export const smallCircleStyles = {
  shadowColor: "rgba(0, 0, 0, 0.5)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 0,
  fillStyle: "#fff",
  radius: 50,
};

export const minuteDotsStyle = {
  color: "#BDBDBD",
  radiusSmall: 3,
  radiusBig: 7,
};

getTime();
