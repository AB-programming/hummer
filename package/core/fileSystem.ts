import si from 'systeminformation';

const devices = await si.blockDevices();
const sizes = await si.fsSize();

const sizeMap = new Map(sizes.map(size => [size.fs, size]));

const disks =  devices.map(device => {
  const usage = sizeMap.get(device.name);
  return {
    name: device.name,
    label: device.label,

    fsType: device.fsType,

    size: usage?.size ? (usage.size / 1024 / 1024 / 1024) : 0,
    used: usage?.used ? (usage.used / 1024 / 1024 / 1024) : 0,
    available: usage?.available ? (usage.available / 1024 / 1024 / 1024) : 0,
    usagePercent: usage?.use ? usage.use : 0
  }
})

export default disks