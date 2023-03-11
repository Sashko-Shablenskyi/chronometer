export function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();

  return {
    hours,
    minutes,
    seconds,
  };
}
