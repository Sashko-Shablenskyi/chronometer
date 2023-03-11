import { ctx, showResult } from "../script.js";

export function clearCanvas() {
  ctx.clearRect(0, 0, showResult.width, showResult.height);
}
