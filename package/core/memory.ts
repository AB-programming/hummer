import si from "systeminformation";
import { bus } from "../event/bus";

setInterval(async () => {
  const memory = await si.mem();
  bus.emit("metrics.memoryTotal", (memory.total / 1024 / 1024 / 1024).toFixed(2));
  bus.emit("metrics.memoryFree", (memory.free / 1024 / 1024 / 1024).toFixed(2));
  bus.emit("metrics.memoryUsed", (memory.used / 1024 / 1024 / 1024).toFixed(2));
  bus.emit("metrics.memoryActive", (memory.active / 1024 / 1024 / 1024).toFixed(2));
  bus.emit("metrics.memorySwapTotal", (memory.swaptotal / 1024 / 1024 / 1024).toFixed(2));
}, 1000);
