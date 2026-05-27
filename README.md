# 🖥️ Hummer(System Monitor Tool)

A lightweight, real-time system information monitoring tool. It displays key metrics such as CPU, memory, OS, and disk file systems in real-time, helping you stay on top of your computer's performance.

This project is built with a modern full-stack architecture, featuring Vue 3 + Nuxt UI on the frontend and the high-performance Bun runtime on the backend.

## ✨ Features

- **Real-time Monitoring**: Retrieves and displays system data with low latency.
- **CPU Info**: View current CPU load, core count, frequency, and more.
- **Memory Info**: Real-time tracking of physical and virtual memory usage.
- **OS Info**: Displays current OS version, platform, and system uptime.
- **File System**: Shows disk partitions, total capacity, and available space.
- **Modern UI**: A clean, responsive user interface built with Nuxt UI.

## 🛠️ Tech Stack

### Frontend
- **Vue 3**
- **Nuxt UI**
- **Pinia**

### Backend
- **Bun**
- **systeminformation**

## 🚀 Getting Started

Before you begin, ensure you have [Bun](https://bun.sh/) installed on your local machine.

### 1. Clone the repository
```bash
git clone https://github.com/AB-programming/hummer.git hummer
cd hummer
```

### 2. Run the backend
```bash
cd package
bun install
bun run index.ts
```

### 3. Run the frontend
```bash
cd hummer-web
bun install # or npm install
bun run dev # or npm run dev
```

### 4. Open your browser
open `http://localhost:5173`