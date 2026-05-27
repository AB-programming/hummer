import { defineStore } from "pinia";

export interface DiskInfo {
  name: string;
  label: string;
  fsType: string;
  size: number;
  used: number;
  available: number;
  usagePercent: number;
}

export const useMetricsStore = defineStore("metrics", {
  state: () => ({
    // cpu
    cpu: 0,
    // memory
    memoryTotal: 0,
    memoryFree: 0,
    memoryUsed: 0,
    memoryActive: 0,
    memorySwapTotal: 0,
    // fs
    disks: [] as DiskInfo[],
  })
});