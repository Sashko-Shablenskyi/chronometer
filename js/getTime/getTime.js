import { renderAnalogClock } from "../analogClock/renderAnalogClock.js";

export function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  renderAnalogClock(hours, minutes, seconds);
  setTimeout(getTime, 1000);
}
