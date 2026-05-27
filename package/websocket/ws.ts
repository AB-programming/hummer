import { bus } from "../event/bus";
import type { ServerWebSocket } from "bun";

const clients = new Set<ServerWebSocket>()

export function setupWebSocket() {
  bus.on("metrics.cpu", (data) => {
    broadcast({
      type: "cpuload",
      data
    });
  });
  bus.on("metrics.memoryTotal", (data) => {
    broadcast({
      type: "memoryTotal",
      data
    });
  });
  bus.on("metrics.memoryFree", (data) => {
    broadcast({
      type: "memoryFree",
      data
    });
  });
  bus.on("metrics.memoryUsed", (data) => {
    broadcast({
      type: "memoryUsed",
      data
    });
  });
  bus.on("metrics.memoryActive", (data) => {
    broadcast({
      type: "memoryActive",
      data
    });
  });
  bus.on("metrics.memorySwapTotal", (data) => {
    broadcast({
      type: "memorySwapTotal",
      data
    });
  });
  return {
    open(ws: ServerWebSocket) {
      clients.add(ws);
    },

    message(ws: ServerWebSocket, message: string | Buffer) {
      // 不处理客户端消息
    },

    close(ws: ServerWebSocket) {
      clients.delete(ws);
    }
  };
}

function broadcast(data: any) {
  const msg = JSON.stringify(data);

  for (const ws of clients) { 
    ws.send(msg);
  }
}