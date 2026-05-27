import si from "systeminformation";

const osInfo = await si.osInfo();

export default {
  platform: osInfo.platform,
  distribution: osInfo.distro,
  release: osInfo.release,
  codename: osInfo.codename,
  kernel: osInfo.kernel,
  arch: osInfo.arch,
  hostname: osInfo.hostname,
  fqdn: osInfo.fqdn,
  codepage: osInfo.codepage,
  serial: osInfo.serial,
  build: osInfo.build,
  servicepack: osInfo.servicepack
}