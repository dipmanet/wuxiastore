// vite.config.ts
import react from 'file:///home/dipman/DipMan/Codes/PERN/DipmanBookStore/client/node_modules/@vitejs/plugin-react/dist/index.mjs'
import { defineConfig } from 'file:///home/dipman/DipMan/Codes/PERN/DipmanBookStore/client/node_modules/vite/dist/node/index.js'
import { resolve } from 'path'
var __vite_injected_original_dirname =
    '/home/dipman/DipMan/Codes/PERN/DipmanBookStore/client'
var vite_config_default = defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            $: resolve(__vite_injected_original_dirname, './'),
            '#': resolve(__vite_injected_original_dirname, './src/'),
            '#app': resolve(__vite_injected_original_dirname, './src/app/'),
            '#assets': resolve(
                __vite_injected_original_dirname,
                './src/assets/'
            ),
            '#components': resolve(
                __vite_injected_original_dirname,
                './src/components/'
            ),
            '#pages': resolve(__vite_injected_original_dirname, './src/pages/'),
        },
    },
    server: {
        port: 5173,
        host: true,
    },
})
export { vite_config_default as default }
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9kaXBtYW4vRGlwTWFuL0NvZGVzL1BFUk4vRGlwbWFuQm9va1N0b3JlL2NsaWVudFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2hvbWUvZGlwbWFuL0RpcE1hbi9Db2Rlcy9QRVJOL0RpcG1hbkJvb2tTdG9yZS9jbGllbnQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL2hvbWUvZGlwbWFuL0RpcE1hbi9Db2Rlcy9QRVJOL0RpcG1hbkJvb2tTdG9yZS9jbGllbnQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcmVhY3QgZnJvbSBcIkB2aXRlanMvcGx1Z2luLXJlYWN0XCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCI7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuXHRwbHVnaW5zOiBbcmVhY3QoKV0sXG5cdHJlc29sdmU6IHtcblx0XHRhbGlhczoge1xuXHRcdFx0XCIjcm9vdFwiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL1wiKSxcblx0XHRcdFwiI3NyY1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9cIiksXG5cdFx0XHRcIiNhcHBcIjogcmVzb2x2ZShfX2Rpcm5hbWUsIFwiLi9zcmMvYXBwL1wiKSxcblx0XHRcdFwiI2Fzc2V0c1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9hc3NldHMvXCIpLFxuXHRcdFx0XCIjY29tcG9uZW50c1wiOiByZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyYy9jb21wb25lbnRzL1wiKSxcblx0XHRcdFwiI3BhZ2VzXCI6IHJlc29sdmUoX19kaXJuYW1lLCBcIi4vc3JjL3BhZ2VzL1wiKSxcblx0XHR9LFxuXHR9LFxuXHRzZXJ2ZXI6IHtcblx0XHRwb3J0OiA1MTczLFxuXHRcdGhvc3Q6IHRydWUsXG5cdH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBaVYsT0FBTyxXQUFXO0FBQ25XLFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMsZUFBZTtBQUZ4QixJQUFNLG1DQUFtQztBQUt6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMzQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1IsT0FBTztBQUFBLE1BQ04sU0FBUyxRQUFRLGtDQUFXLElBQUk7QUFBQSxNQUNoQyxRQUFRLFFBQVEsa0NBQVcsUUFBUTtBQUFBLE1BQ25DLFFBQVEsUUFBUSxrQ0FBVyxZQUFZO0FBQUEsTUFDdkMsV0FBVyxRQUFRLGtDQUFXLGVBQWU7QUFBQSxNQUM3QyxlQUFlLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDckQsVUFBVSxRQUFRLGtDQUFXLGNBQWM7QUFBQSxJQUM1QztBQUFBLEVBQ0Q7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNQO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
