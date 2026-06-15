import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { 
      entry: "server",
      preset: "vercel" // This tells the internal Nitro server to build for Vercel
    },
  },
} as any);