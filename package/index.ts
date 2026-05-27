import cpu from "./core/cpu";
import { setupWebSocket } from "./websocket/ws";
import "./core/memory";
import os from "./core/os";
import fsInfo from "./core/fileSystem";

const server = Bun.serve({
  port: 3000,
  fetch(req: Request) {
    const url = new URL(req.url);

    // WebSocket upgrade
    if (url.pathname === "/ws") {
      if (server.upgrade(req)) {
        return;
      }

      return new Response("upgrade failed", {
        status: 500,
      });
    }
    if (url.pathname === "/cpu/info") {
      return Response.json(cpu);
    }

    if (url.pathname === "/os/info") {
      return Response.json(os);
    }

    if (url.pathname === "/fs/info") {
      return Response.json(fsInfo);
    }

    return new Response("Not Found", {
      status: 404,
    });
  },
  websocket: setupWebSocket(),
});

console.log(`🚀 Listening on ${server.url}`);
