import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    //服务器主机名
    port: 8080,
    open: true,
    hmr: {
      host: "127.0.0.1",
      port: 5173,
    },
    // 代理跨域
    proxy: {
      "/api": {
        target: "http://18.222.222.222:8080",
        changeOrigin: true,
        // 将/api去掉
        rewrite: (path: string) => path.replace(/^\/api/, ""),
      },
    },
  },
});
