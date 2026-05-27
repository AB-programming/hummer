<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="shadow">
      <div class="max-w-7xl mx-auto px-6 py-6">
        <h1 class="text-3xl font-bold">System Monitor</h1>
        <p class="mt-2 text-gray-600">Real-time system information and resource usage</p>
      </div>
    </div>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-6 py-8">
      <!-- Top Row: CPU and Memory -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <!-- CPU Card -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">CPU</h2>
              <UBadge size="md" color="neutral" variant="outline">
                <UIcon name="i-solar:cpu-broken" class="size-4" />
                {{ cpuName }}
              </UBadge>
            </div>
          </template>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700">CPU Usage</span>
                <span class="text-2xl font-bold text-blue-600">{{ `${metrics.cpu}%` }}</span>
              </div>
              <UProgress v-model="metrics.cpu" size="lg" color="secondary" />
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="border-t pt-3">
                <p class="text-gray-600">Cores</p>
                <p class="font-semibold text-lg">{{ cpuCores }}</p>
              </div>
              <div class="border-t pt-3">
                <p class="text-gray-600">Threads</p>
                <p class="font-semibold text-lg">{{ cpuThreads }}</p>
              </div>
              <div class="border-t pt-3">
                <p class="text-gray-600">Frequency</p>
                <p class="font-semibold text-lg">{{ cpuSpeed }} GHz</p>
              </div>
              <div class="border-t pt-3">
                <p class="text-gray-600">Temperature</p>
                <p class="font-semibold text-lg">62°C</p>
              </div>
            </div>
          </div>
        </UCard>

        <!-- Memory Card -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">Memory</h2>
              <UBadge size="md" color="neutral" variant="outline">
                <UIcon name="i-grommet-icons:memory" class="size-4" />
                {{ metrics.memoryTotal.toFixed(1) }} GB
              </UBadge>
            </div>
          </template>

          <div class="space-y-4">
            <div>
              <div class="flex justify-between items-center mb-2">
                <span class="text-sm font-medium text-gray-700">Memory Usage</span>
                <span class="text-2xl font-bold text-green-600">{{ memoryUsagePercent.toFixed(2) }} %</span>
              </div>
              <UProgress v-model="memoryUsagePercent" size="lg" />
            </div>

            <div class="grid grid-cols-2 gap-4 text-sm">
              <div class="border-t pt-3">
                <p class="text-gray-600">Used</p>
                <p class="font-semibold text-lg">{{ metrics.memoryUsed.toFixed(1) }} GB</p>
              </div>
              <div class="border-t pt-3">
                <p class="text-gray-600">Available</p>
                <p class="font-semibold text-lg">{{ metrics.memoryFree.toFixed(1) }} GB</p>
              </div>
              <div class="border-t pt-3">
                <p class="text-gray-600">Cached</p>
                <p class="font-semibold text-lg">{{ metrics.memoryActive.toFixed(1) }} GB</p>
              </div>
              <div class="border-t pt-3">
                <p class="text-gray-600">Swap</p>
                <p class="font-semibold text-lg">{{ metrics.memorySwapTotal.toFixed(1) }} GB</p>
              </div>
            </div>
          </div>
        </UCard>
      </div>

      <!-- OS Info -->
      <div class="grid grid-cols-1 gap-6 mb-6">
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">System Information</h2>
              <UBadge size="md" color="neutral" variant="outline">
                <UIcon name="i-token-branded:os" class="size-4" />
                OS Details
              </UBadge>
            </div>
          </template>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <!-- OS Info Item -->
            <div class="border-l-4 border-blue-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Operating System</p>
              <p class="font-semibold text-lg">{{ osPlatform }}</p>
            </div>

            <!-- Distribution -->
            <div class="border-l-4 border-blue-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Distribution</p>
              <p class="font-semibold">{{ osDistribution }}</p>
            </div>

            <!-- Release -->
            <div class="border-l-4 border-blue-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Release</p>
              <p class="font-semibold text-lg">{{ osRelease }}</p>
            </div>

            <!-- Codename -->
            <div class="border-l-4 border-green-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Codename</p>
              <p class="font-semibold text-lg">{{ osCodename }}</p>
            </div>

            <!-- Kernel -->
            <div class="border-l-4 border-green-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Kernel</p>
              <p class="font-semibold">{{ osKernel }}</p>
            </div>

            <!-- Architecture -->
            <div class="border-l-4 border-green-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Architecture</p>
              <p class="font-semibold text-lg">{{ osArch }}</p>
            </div>

            <!-- Hostname -->
            <div class="border-l-4 border-purple-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Hostname</p>
              <p class="font-semibol">{{ osHostname }}</p>
            </div>

            <!-- FQDN -->
            <div class="border-l-4 border-purple-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">FQDN</p>
              <p class="font-semibold">{{ osFqdn }}</p>
            </div>

            <!-- Codepage -->
            <div class="border-l-4 border-purple-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Codepage</p>
              <p class="font-semibold text-lg">{{ osCodepage }}</p>
            </div>

            <!-- Build -->
            <div class="border-l-4 border-orange-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Build</p>
              <p class="font-semibold text-lg">{{ osBuild }}</p>
            </div>

            <!-- Service Pack -->
            <div class="border-l-4 border-orange-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Service Pack</p>
              <p class="font-semibold text-lg">{{ osServicePack }}</p>
            </div>

            <!-- Serial -->
            <div class="border-l-4 border-orange-500 pl-4">
              <p class="text-sm text-gray-600 mb-1">Serial Number</p>
              <p class="font-semibold text-sm">{{ osSerial }}</p>
            </div>
          </div>
        </UCard>
      </div>

      <!-- Middle Row: Disk -->
      <div class="grid grid-cols-1 gap-6 mb-6">
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">Disk Info</h2>
          </template>

          <div class="space-y-4">
            <!-- Disk C: -->
            <div v-for="disk in disks" :key="disk.name">
              <div class="flex justify-between items-center mb-2">
                <span class="font-medium text-gray-400">{{ disk.name }} {{ disk.label }}</span>
                <span class="text-sm text-gray-500">{{ disk.used.toFixed(1) }} GB / <span class="text-gray-300">{{
                  disk.size.toFixed(1) }} </span> GB | <span class="text-gray-400">Free {{ disk.available.toFixed(1)
                    }}</span> GB</span>
              </div>
              <UProgress v-model="disk.usagePercent" :color="computeDiskColor(disk.usagePercent)" />
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed } from "vue";
import { cpuInfoApi, fsInfoApi, osInfoApi } from "../api/sys-info";
import { useMetricsStore, type DiskInfo } from "../stores/metrics";

const metrics = useMetricsStore()

// cpu
const cpuName = ref("");
const cpuCores = ref(0);
const cpuThreads = ref(0);
const cpuSpeed = ref(0);

// os
const osPlatform = ref("");
const osDistribution = ref("");
const osRelease = ref("");
const osCodename = ref("");
const osKernel = ref("");
const osArch = ref("");
const osHostname = ref("");
const osFqdn = ref("");
const osCodepage = ref("");
const osBuild = ref("");
const osServicePack = ref("");
const osSerial = ref("");

// fs
const disks = ref<DiskInfo[]>([]);

// memory
const memoryUsagePercent = computed(() => ((metrics.memoryUsed / metrics.memoryTotal) * 100))

// compute disk usage color based on usage percentage
function computeDiskColor(percent: number) {
  if (percent < 50) {
    return "primary";
  } else if (percent < 70) {
    return "info";
  } else if (percent < 90) {
    return "warning";
  } else {
    return "error";
  }
}

async function fetchCpuInfo() {
  const cpuInfo = await cpuInfoApi();
  cpuName.value = cpuInfo.name;
  cpuCores.value = cpuInfo.cores;
  cpuThreads.value = cpuInfo.threads;
  cpuSpeed.value = cpuInfo.speed;
}

async function fetchOsInfo() {
  const osInfo = await osInfoApi();
  osPlatform.value = osInfo.platform;
  osDistribution.value = osInfo.distribution;
  osRelease.value = osInfo.release;
  osCodename.value = osInfo.codename;
  osKernel.value = osInfo.kernel;
  osArch.value = osInfo.arch;
  osHostname.value = osInfo.hostname;
  osFqdn.value = osInfo.fqdn;
  osCodepage.value = osInfo.codepage;
  osBuild.value = osInfo.build;
  osServicePack.value = osInfo.servicepack;
  osSerial.value = osInfo.serial;
}

async function fetchFsInfo() {
  const fsInfo = await fsInfoApi();
  disks.value = fsInfo;
  console.log('disks', disks.value)
}

onMounted(async () => {
  await fetchCpuInfo();
  await fetchOsInfo();
  await fetchFsInfo();
});
</script>

<style scoped></style>
