"use strict";

const analogClock = document.getElementById("analogClock"),
  ctx = analogClock.getContext("2d"),
  clockRadius = analogClock.width / 2 - 55,
  centerX = analogClock.width / 2,
  centerY = analogClock.height / 2;

// -----STYLES-----

const arrowsStyles = {
  hourArrowLength: clockRadius * 0.6,
  hourArrowWidth: 9,
  minuteArrowLength: clockRadius * 0.8,
  minuteArrowWidth: 7,
  secondArrowLength: clockRadius * 0.85,
  secondArrowWidth: 4,
  arrowGradient: {
    start: "#0D8AFC",
    end: "#33F0B0",
  },
};

const bigCircleStyles = {
  shadowColor: "rgba(22, 25, 36, 0.3)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 60,
  fillStyle: "#fff",
  radius: clockRadius,
};

const middleCircleStyles = {
  shadowColor: "rgba(201, 210, 226, 0.4)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 70,
  fillStyle: "#fff",
  radius: clockRadius - 60,
};

const smallCircleStyles = {
  shadowColor: "rgba(0, 0, 0, 0.5)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 0,
  fillStyle: "#fff",
  radius: 50,
};

const minuteDotsStyle = {
  color: "#BDBDBD",
  radiusSmall: 3,
  radiusBig: 7,
};

function createGradient(rotation, ArrowLength) {
  return ctx.createLinearGradient(
    centerX,
    centerY,
    centerX + Math.cos(rotation) * ArrowLength,
    centerY + Math.sin(rotation) * ArrowLength
  );
}

// -----RENDER CLOCK-----

getTime();

function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  renderClock(hours, minutes, seconds);
  setTimeout(getTime, 1000);
}

function renderClock(hours, minutes, seconds) {
  ctx.clearRect(0, 0, analogClock.width, analogClock.height);

  drawCircle({ ...bigCircleStyles });
  drawCircle({ ...middleCircleStyles });
  drawMinuteDots(seconds, { ...minuteDotsStyle });
  determinePositionArrow(hours, minutes, seconds, { ...arrowsStyles });
  drawCircle({ ...smallCircleStyles });
}

function drawCircle({
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

function drawMinuteDots(seconds, { color, radiusSmall, radiusBig }) {
  const numPoints = 60;

  for (let i = 0; i < numPoints; i++) {
    const angle = i * ((2 * Math.PI) / numPoints),
      x = centerX + (clockRadius - 15) * Math.cos(angle),
      y = centerY + (clockRadius - 15) * Math.sin(angle);

    ctx.beginPath();
    if (i % 5) {
      ctx.arc(x, y, radiusSmall, 0, 2 * Math.PI);
    } else {
      ctx.arc(x, y, radiusBig, 0, 2 * Math.PI);
    }

    if (i == seconds - 15) {
      ctx.fillStyle = "red";
      ctx.fill();
    } else {
      ctx.fillStyle = color;
      ctx.fill();
    }
  }
}

function determinePositionArrow(
  hours,
  minutes,
  seconds,
  {
    hourArrowLength,
    hourArrowWidth,
    minuteArrowLength,
    minuteArrowWidth,
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
}

function drawArrow(rotation, ArrowLength, ArrowWidth, gradient) {
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
