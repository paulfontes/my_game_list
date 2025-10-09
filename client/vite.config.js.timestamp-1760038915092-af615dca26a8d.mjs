// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/pfont/codeworks/week-8/my_game_list/client/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/pfont/codeworks/week-8/my_game_list/client/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///C:/Users/pfont/codeworks/week-8/my_game_list/client/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import eslintPlugin from "file:///C:/Users/pfont/codeworks/week-8/my_game_list/client/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_import_meta_url = "file:///C:/Users/pfont/codeworks/week-8/my_game_list/client/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    eslintPlugin({
      overrideConfigFile: "eslint.config.js"
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  build: {
    sourcemap: false
  },
  server: {
    port: 8080
  }
  // NOTE If deploying to gh-pages uncomment the line below (https://vitejs.dev/config/shared-options.html#base)
  // base: '/my_game_list/'
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxwZm9udFxcXFxjb2Rld29ya3NcXFxcd2Vlay04XFxcXG15X2dhbWVfbGlzdFxcXFxjbGllbnRcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXHBmb250XFxcXGNvZGV3b3Jrc1xcXFx3ZWVrLThcXFxcbXlfZ2FtZV9saXN0XFxcXGNsaWVudFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvcGZvbnQvY29kZXdvcmtzL3dlZWstOC9teV9nYW1lX2xpc3QvY2xpZW50L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSAndml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzJ1xuaW1wb3J0IGVzbGludFBsdWdpbiBmcm9tICd2aXRlLXBsdWdpbi1lc2xpbnQnXG5cblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICB2dWUoKSxcbiAgICB2dWVEZXZUb29scygpLFxuICAgIGVzbGludFBsdWdpbih7XG4gICAgICBvdmVycmlkZUNvbmZpZ0ZpbGU6ICdlc2xpbnQuY29uZmlnLmpzJyxcbiAgICB9KSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxuICAgIH1cbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuICB9LFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA4MDgwXG4gIH0sXG5cbiAgLy8gTk9URSBJZiBkZXBsb3lpbmcgdG8gZ2gtcGFnZXMgdW5jb21tZW50IHRoZSBsaW5lIGJlbG93IChodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL3NoYXJlZC1vcHRpb25zLmh0bWwjYmFzZSlcbiAgLy8gYmFzZTogJy9teV9nYW1lX2xpc3QvJ1xufSlcblxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF5VixTQUFTLGVBQWUsV0FBVztBQUM1WCxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxrQkFBa0I7QUFKa00sSUFBTSwyQ0FBMkM7QUFRNVEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsSUFBSTtBQUFBLElBQ0osWUFBWTtBQUFBLElBQ1osYUFBYTtBQUFBLE1BQ1gsb0JBQW9CO0FBQUEsSUFDdEIsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsRUFDYjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQTtBQUFBO0FBSUYsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
