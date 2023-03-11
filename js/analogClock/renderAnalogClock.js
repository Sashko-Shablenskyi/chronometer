import { drawCircle } from "../renderChronometerDisplay/drawCircle.js";
import {
  bigCircleStyles,
  middleCircleStyles,
  minuteDotsStyle,
  arrowsStyles,
  smallCircleStyles,
} from "../script.js";
import { drawMinuteDots } from "../renderChronometerDisplay/drawMinuteDots.js";
import { determinePositionArrow } from "./determinePositionArrow.js";
import { getTime } from "../generalFunctions/getTime.js";
import { clearCanvas } from "../generalFunctions/clearCanvas.js";

export let clock;

export function renderAnalogClock() {
  const { hours, minutes, seconds } = getTime();

  clearCanvas();

  drawCircle({ ...bigCircleStyles });
  drawCircle({ ...middleCircleStyles });
  drawMinuteDots(seconds, { ...minuteDotsStyle });
  determinePositionArrow(hours, minutes, seconds, { ...arrowsStyles });
  drawCircle({ ...smallCircleStyles });

  clock = setTimeout(renderAnalogClock, 1000);
}
