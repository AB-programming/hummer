import si from "systeminformation";
import { bus } from "../event/bus";

const cpu = await si.cpu();

const cpuSpeed = await si.cpuCurrentSpeed()
const cpuTemperature = await si.cpuTemperature()

export default {
  name: cpu.brand,
  cores: cpu.physicalCores,
  threads: cpu.cores,
  speed: cpuSpeed.avg,
  temperature: cpuTemperature.main
}

setInterval(async () => {
  const load = await si.currentLoad()
  bus.emit("metrics.cpu", load.currentLoad.toFixed(2))
}, 1000)
