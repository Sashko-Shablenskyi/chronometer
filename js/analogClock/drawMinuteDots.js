import { ctx, centerX, centerY, showResultRadius } from "../script.js";

export function createGradient(rotation, ArrowLength) {
  return ctx.createLinearGradient(
    centerX,
    centerY,
    centerX + Math.cos(rotation) * ArrowLength,
    centerY + Math.sin(rotation) * ArrowLength
  );
}

export function drawMinuteDots(seconds, { color, radiusSmall, radiusBig }) {
  const numPoints = 60;

  for (let i = 0; i < numPoints; i++) {
    const angle = i * ((2 * Math.PI) / numPoints) - Math.PI / 2;

    const x = centerX + (showResultRadius - 15) * Math.cos(angle),
      y = centerY + (showResultRadius - 15) * Math.sin(angle);

    ctx.beginPath();
    if (i % 5) {
      ctx.arc(x, y, radiusSmall, 0, 2 * Math.PI);
    } else {
      ctx.arc(x, y, radiusBig, 0, 2 * Math.PI);
    }

    if (i == seconds) {
      ctx.fillStyle = "red";
      ctx.fill();
    } else {
      ctx.fillStyle = color;
      ctx.fill();
    }
  }
}
