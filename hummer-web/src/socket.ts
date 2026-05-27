import { useMetricsStore } from "./stores/metrics";

type CpuMessage = {
  type: "cpuload";
  data: number;
}

type MemoryTotalMessage = {
  type: "memoryTotal";
  data: number;
}

type MemoryFreeMessage = {
  type: "memoryFree";
  data: number;
}

type MemoryUsedMessage = {
  type: "memoryUsed"; 
  data: number;
}

type MemoryActiveMessage = {
  type: "memoryActive";
  data: number;
}

type MemorySwapTotalMessage = {
  type: "memorySwapTotal";
  data: number;
}

type WsMessage = CpuMessage | MemoryTotalMessage | MemoryFreeMessage | MemoryUsedMessage | MemoryActiveMessage | MemorySwapTotalMessage;

class SocketClient {
  ws: WebSocket | null = null;

  connect() {
    if (this.ws) return;

    this.ws = new WebSocket("ws://localhost:3000/ws");

    this.ws.onopen = () => {
      console.log("ws connected");
    };

    this.ws.onmessage = (event) => {
      const message: WsMessage = JSON.parse(event.data)

      this.handleMessage(message);
    };

    this.ws.onclose = () => {
      console.log("ws closed");

      this.ws = null;
    };
  }

  handleMessage(message: WsMessage) {
    const metrics = useMetricsStore();
    switch (message.type) {
      case "cpuload": {
        metrics.cpu = Number(message.data);
        break;
      }
      case "memoryTotal": {
        metrics.memoryTotal = Number(message.data);
        break;
      }
      case "memoryFree": {
        metrics.memoryFree = Number(message.data);
        break;
      }
      case "memoryUsed": {
        metrics.memoryUsed = Number(message.data);
        break;
      }
      case "memoryActive": {
        metrics.memoryActive = Number(message.data);
        break;
      }
      case "memorySwapTotal": {
        metrics.memorySwapTotal = Number(message.data);
        break;
      }
    }
  }
}

export const socketClient = new SocketClient();