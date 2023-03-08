import { ctx, centerX, centerY } from "../script.js";

export function createGradient(rotation, ArrowLength) {
  return ctx.createLinearGradient(
    centerX,
    centerY,
    centerX + Math.cos(rotation) * ArrowLength,
    centerY + Math.sin(rotation) * ArrowLength
  );
}
