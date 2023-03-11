"use strict";

import { renderAnalogClock, clock } from "./analogClock/renderAnalogClock.js";
import { renderTimer } from "./timer/renderTimer.js";

const wrapper = document.querySelector(".display");
export const showResult = document.getElementById("showResult");

showResult.width = wrapper.offsetWidth;
showResult.height = showResult.width;

export const ctx = showResult.getContext("2d");
export const showResultRadius = showResult.width / 2 - 15;
export const centerX = showResult.width / 2;
export const centerY = showResult.height / 2;

const btnsArr = [...document.querySelectorAll(".main-btn")];

btnsArr.forEach((e) => {
  e.addEventListener("click", (e) => {
    btnsArr.forEach((btn) => {
      btn.classList.remove("btn--active");
    });

    e.target.classList.add("btn--active");
    changeMode(e.target.innerHTML);
  });
});

const timerBtnsWrapper = document.querySelector(".timer-btns-box");

function changeMode(btnValue) {
  switch (btnValue) {
    case "Clock":
      clearInterval(intervalTimer);
      renderAnalogClock();
      timerBtnsWrapper.classList.remove("timer-btns-box--active");
      break;
    case "Timer":
      clearTimeout(clock);
      renderTimer();
      timerBtnsWrapper.classList.add("timer-btns-box--active");
      break;

    default:
      break;
  }
}

// -----ANALOG CLOCK STYLES-----

export const arrowsStyles = {
  hourArrowLength: showResultRadius * 0.6,
  hourArrowWidth: 9,
  minuteArrowLength: showResultRadius * 0.8,
  minuteArrowWidth: 7,
  secondArrowLength: showResultRadius * 0.85,
  secondArrowWidth: 2,
  arrowGradient: {
    start: "#0D8AFC",
    end: "#33F0B0",
  },
};

export const bigCircleStyles = {
  shadowColor: "rgba(22, 25, 36, 0.2)",
  shadowOffsetX: 5,
  shadowOffsetY: 10,
  shadowBlur: 10,
  fillStyle: "#fff",
  radius: showResultRadius,
};

export const middleCircleStyles = {
  shadowColor: "rgba(201, 210, 226, 0.1)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 70,
  fillStyle: "#fff",
  radius: showResultRadius - 60,
};

export const smallCircleStyles = {
  shadowColor: "rgba(0, 0, 0, 0)",
  shadowOffsetX: 0,
  shadowOffsetY: 0,
  shadowBlur: 50,
  fillStyle: "#fff",
  radius: 50,
};

export const minuteDotsStyle = {
  color: "#BDBDBD",
  radiusSmall: 3,
  radiusBig: 7,
};

renderAnalogClock();

// -----TIMER-----

export let intervalTimer,
  startTime,
  elapsedTime = 0,
  timerDuration = 0;

const minutesInput = document.getElementById("minutesInput"),
  startBtn = document.getElementById("startBtn"),
  pauseBtn = document.getElementById("pauseBtn"),
  stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", startTimer);

pauseBtn.addEventListener("click", () => {
  clearInterval(intervalTimer);
});

stopBtn.addEventListener("click", () => {
  clearInterval(intervalTimer);
  elapsedTime = 0;
  timerDuration = 0;
  renderTimer(timerDuration);
});

function startTimer() {
  clearInterval(intervalTimer);

  timerDuration = Number(minutesInput.value) * 60;
  startTime = Date.now();
  intervalTimer = setInterval(() => {
    elapsedTime = Math.floor((Date.now() - startTime) / 1000);

    const remainingTime = timerDuration - elapsedTime;
    renderTimer(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(intervalTimer);
    }
  }, 1000);
}
