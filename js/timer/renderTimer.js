import { clearCanvas } from "../generalFunctions/clearCanvas.js";
import {
  bigCircleStyles,
  middleCircleStyles,
  smallCircleStyles,
  ctx,
  showResult,
  minuteDotsStyle,
} from "../script.js";
import { drawCircle } from "../renderChronometerDisplay/drawCircle.js";
import { drawMinuteDots } from "../renderChronometerDisplay/drawMinuteDots.js";

export function renderTimer(time = 0) {
  clearCanvas();

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  let text = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  ctx.font = "48px Audiowides";

  const textWidth = ctx.measureText(text).width;
  const x = (showResult.width - textWidth) / 2;
  const y = showResult.height / 2 + 24;

  drawCircle({ ...bigCircleStyles });
  drawCircle({ ...middleCircleStyles });
  drawCircle({ ...smallCircleStyles });
  drawMinuteDots(seconds, { ...minuteDotsStyle });

  ctx.fillStyle = "red";
  ctx.fillText(text, x, y);

  // timer = setTimeout(renderTimer, 1000);
}
