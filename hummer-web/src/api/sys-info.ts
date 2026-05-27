
export async function cpuInfoApi() {
  const response = await fetch(`/api/cpu/info`);
  const data = await response.json();
  return data;
}

export async function osInfoApi() {
  const response = await fetch(`/api/os/info`);
  const data = await response.json();
  return data;
}

export async function fsInfoApi() {
  const response = await fetch(`/api/fs/info`);
  const data = await response.json();
  return data;
}