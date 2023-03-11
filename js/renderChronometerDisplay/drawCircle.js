import { ctx, centerX, centerY } from "../script.js";

export function drawCircle({
  shadowColor,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  fillStyle,
  radius,
}) {
  ctx.beginPath();
  ctx.shadowColor = shadowColor;
  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowBlur = shadowBlur;

  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = fillStyle;
  ctx.fill();

  ctx.shadowColor = shadowColor;
  ctx.shadowOffsetX = 4;
  ctx.shadowOffsetY = 4;
  ctx.shadowBlur = shadowBlur;
  ctx.fill();

  ctx.closePath();
}
