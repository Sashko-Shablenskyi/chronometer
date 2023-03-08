import { drawArrow } from "./drawArrow.js";

export function determinePositionArrow(
  hours,
  minutes,
  seconds,
  {
    hourArrowLength,
    hourArrowWidth,
    minuteArrowLength,
    minuteArrowWidth,
    secondArrowLength,
    secondArrowWidth,
    arrowGradient,
  }
) {
  const hourRotation =
    ((hours + minutes / 60) / 12) * 2 * Math.PI - Math.PI / 2;
  const minuteRotation =
    ((minutes + seconds / 60) / 60) * 2 * Math.PI - Math.PI / 2;
  const secondRotation = (seconds / 60) * 2 * Math.PI - Math.PI / 2;

  drawArrow(hourRotation, hourArrowLength, hourArrowWidth, arrowGradient);
  drawArrow(minuteRotation, minuteArrowLength, minuteArrowWidth, arrowGradient);
  drawArrow(secondRotation, secondArrowLength, secondArrowWidth, arrowGradient);
}
