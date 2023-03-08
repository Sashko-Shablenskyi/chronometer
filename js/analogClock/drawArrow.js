import { createGradient } from "./createGradient.js";
import { ctx, centerX, centerY } from "../script.js";

export function drawArrow(rotation, ArrowLength, ArrowWidth, gradient) {
  const ArrowGradient = createGradient(rotation, ArrowLength);

  ArrowGradient.addColorStop(0, gradient.start);
  ArrowGradient.addColorStop(1, gradient.end);

  ctx.beginPath();
  ctx.lineWidth = ArrowWidth;
  ctx.strokeStyle = ArrowGradient;
  ctx.moveTo(centerX, centerY);
  ctx.lineTo(
    centerX + Math.cos(rotation) * ArrowLength,
    centerY + Math.sin(rotation) * ArrowLength
  );
  ctx.stroke();
}
