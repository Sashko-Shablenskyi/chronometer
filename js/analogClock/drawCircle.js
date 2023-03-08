import { ctx, centerX, centerY } from "../script.js";

export function drawCircle({
  shadowColor,
  shadowOffsetX,
  shadowOffsetY,
  shadowBlur,
  fillStyle,
  radius,
}) {
  ctx.shadowColor = shadowColor;
  ctx.shadowOffsetX = shadowOffsetX;
  ctx.shadowOffsetY = shadowOffsetY;
  ctx.shadowBlur = shadowBlur;
  ctx.shadowInset = true;

  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.fillStyle = fillStyle;
  ctx.fill();
  ctx.closePath();
}
