import { ctx } from "../script.js";
import { drawCircle } from "./drawCircle.js";
import {
  bigCircleStyles,
  middleCircleStyles,
  minuteDotsStyle,
  arrowsStyles,
  smallCircleStyles,
} from "../script.js";
import { drawMinuteDots } from "./drawMinuteDots.js";
import { determinePositionArrow } from "./determinePositionArrow.js";

export function renderAnalogClock(hours, minutes, seconds) {
  ctx.clearRect(0, 0, showResult.width, showResult.height);

  drawCircle({ ...bigCircleStyles });
  drawCircle({ ...middleCircleStyles });
  drawMinuteDots(seconds, { ...minuteDotsStyle });
  determinePositionArrow(hours, minutes, seconds, { ...arrowsStyles });
  drawCircle({ ...smallCircleStyles });
}
