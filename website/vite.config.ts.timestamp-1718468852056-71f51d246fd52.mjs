// vite.config.ts
import { vitePlugin as remix } from "file:///Users/morse/Documents/GitHub/minecord/node_modules/.pnpm/@remix-run+dev@2.9.2_@remix-run+react@2.9.2_react-dom@19.0.0-rc-915b914b3a-20240515_react@19._sc5wnpzxahx4suoy6t6cuprjri/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///Users/morse/Documents/GitHub/minecord/node_modules/.pnpm/vite@5.2.11_@types+node@20.14.2_terser@5.31.1/node_modules/vite/dist/node/index.js";
import tsconfigPaths from "file:///Users/morse/Documents/GitHub/minecord/node_modules/.pnpm/vite-tsconfig-paths@4.3.2_typescript@5.4.5_vite@5.2.11_@types+node@20.14.2_terser@5.31.1_/node_modules/vite-tsconfig-paths/dist/index.mjs";
import { glslify } from "file:///Users/morse/Documents/GitHub/minecord/node_modules/.pnpm/vite-plugin-glslify@2.1.0_vite@5.2.11_@types+node@20.14.2_terser@5.31.1_/node_modules/vite-plugin-glslify/dist/index.js";
var building = process.env.NODE_ENV === "production";
var vite_config_default = defineConfig(({ mode, command, isSsrBuild }) => {
  const define = {};
  define["global"] = "globalThis";
  Object.assign(
    define,
    Object.fromEntries(
      Object.entries(process.env).filter(
        ([key, v]) => key.includes("PUBLIC_") && typeof v === "string"
      ).map(([key, value]) => [
        `process.env.${key}`,
        JSON.stringify(value)
      ])
    )
  );
  return {
    define,
    ssr: {
      noExternal: building ? true : void 0,
      external: building ? ["@prisma/client"] : void 0
    },
    legacy: {
      proxySsrExternalModules: true
    },
    assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.hdr", "**/*.fbx"],
    plugins: [glslify(), remix({ appDirectory: "src" }), tsconfigPaths({})],
    test: {
      alias: [
        {
          find: /^@voxelize\/core/,
          replacement: "@voxelize/core/dist/index.js"
        }
      ],
      // setupFiles: ['@vitest/web-worker'],
      exclude: [
        "**/dist/**",
        "**/esm/**",
        "**/node_modules/**",
        "**/e2e/**"
      ]
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9taW5lY29yZC93ZWJzaXRlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbW9yc2UvRG9jdW1lbnRzL0dpdEh1Yi9taW5lY29yZC93ZWJzaXRlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tb3JzZS9Eb2N1bWVudHMvR2l0SHViL21pbmVjb3JkL3dlYnNpdGUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyB2aXRlUGx1Z2luIGFzIHJlbWl4IH0gZnJvbSAnQHJlbWl4LXJ1bi9kZXYnXG5pbXBvcnQgeyBub2RlUG9seWZpbGxzIH0gZnJvbSAndml0ZS1wbHVnaW4tbm9kZS1wb2x5ZmlsbHMnXG5cbmltcG9ydCB7IGluc3RhbGxHbG9iYWxzIH0gZnJvbSAnQHJlbWl4LXJ1bi9ub2RlJ1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcbmltcG9ydCB0c2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5pbXBvcnQgeyBnbHNsaWZ5IH0gZnJvbSAndml0ZS1wbHVnaW4tZ2xzbGlmeSdcblxuY29uc3QgYnVpbGRpbmcgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nXG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlLCBjb21tYW5kLCBpc1NzckJ1aWxkIH0pID0+IHtcbiAgICBjb25zdCBkZWZpbmUgPSB7fSBhcyBhbnlcblxuICAgIGRlZmluZVsnZ2xvYmFsJ10gPSAnZ2xvYmFsVGhpcydcbiAgICAvLyBkZWZpbmVbJ3Byb2Nlc3MnXSA9ICd7ZW52OiB7fX0nXG4gICAgT2JqZWN0LmFzc2lnbihcbiAgICAgICAgZGVmaW5lLFxuICAgICAgICBPYmplY3QuZnJvbUVudHJpZXMoXG4gICAgICAgICAgICBPYmplY3QuZW50cmllcyhwcm9jZXNzLmVudilcbiAgICAgICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAgICAgICAoW2tleSwgdl0pID0+XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkuaW5jbHVkZXMoJ1BVQkxJQ18nKSAmJiB0eXBlb2YgdiA9PT0gJ3N0cmluZycsXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIC5tYXAoKFtrZXksIHZhbHVlXSkgPT4gW1xuICAgICAgICAgICAgICAgICAgICBgcHJvY2Vzcy5lbnYuJHtrZXl9YCxcbiAgICAgICAgICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkodmFsdWUpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICApLFxuICAgIClcblxuICAgIHJldHVybiB7XG4gICAgICAgIGRlZmluZSxcblxuICAgICAgICBzc3I6IHtcbiAgICAgICAgICAgIG5vRXh0ZXJuYWw6IGJ1aWxkaW5nID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGV4dGVybmFsOiBidWlsZGluZyA/IFsnQHByaXNtYS9jbGllbnQnXSA6IHVuZGVmaW5lZCxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnYWN5OiB7XG4gICAgICAgICAgICBwcm94eVNzckV4dGVybmFsTW9kdWxlczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYXNzZXRzSW5jbHVkZTogWycqKi8qLmdsYicsICcqKi8qLmdsdGYnLCAnKiovKi5oZHInLCAnKiovKi5mYngnXSxcbiAgICAgICAgcGx1Z2luczogW2dsc2xpZnkoKSwgcmVtaXgoeyBhcHBEaXJlY3Rvcnk6ICdzcmMnIH0pLCB0c2NvbmZpZ1BhdGhzKHt9KV0sXG4gICAgICAgIHRlc3Q6IHtcbiAgICAgICAgICAgIGFsaWFzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmaW5kOiAvXkB2b3hlbGl6ZVxcL2NvcmUvLFxuICAgICAgICAgICAgICAgICAgICByZXBsYWNlbWVudDogJ0B2b3hlbGl6ZS9jb3JlL2Rpc3QvaW5kZXguanMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyBzZXR1cEZpbGVzOiBbJ0B2aXRlc3Qvd2ViLXdvcmtlciddLFxuXG4gICAgICAgICAgICBleGNsdWRlOiBbXG4gICAgICAgICAgICAgICAgJyoqL2Rpc3QvKionLFxuICAgICAgICAgICAgICAgICcqKi9lc20vKionLFxuICAgICAgICAgICAgICAgICcqKi9ub2RlX21vZHVsZXMvKionLFxuICAgICAgICAgICAgICAgICcqKi9lMmUvKionLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICB9XG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLGNBQWMsYUFBYTtBQUloVyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixTQUFTLGVBQWU7QUFFeEIsSUFBTSxXQUFXLFFBQVEsSUFBSSxhQUFhO0FBRTFDLElBQU8sc0JBQVEsYUFBYSxDQUFDLEVBQUUsTUFBTSxTQUFTLFdBQVcsTUFBTTtBQUMzRCxRQUFNLFNBQVMsQ0FBQztBQUVoQixTQUFPLFFBQVEsSUFBSTtBQUVuQixTQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0gsT0FBTyxRQUFRLFFBQVEsR0FBRyxFQUNyQjtBQUFBLFFBQ0csQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUNKLElBQUksU0FBUyxTQUFTLEtBQUssT0FBTyxNQUFNO0FBQUEsTUFDaEQsRUFDQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEtBQUssTUFBTTtBQUFBLFFBQ25CLGVBQWUsR0FBRztBQUFBLFFBQ2xCLEtBQUssVUFBVSxLQUFLO0FBQUEsTUFDeEIsQ0FBQztBQUFBLElBQ1Q7QUFBQSxFQUNKO0FBRUEsU0FBTztBQUFBLElBQ0g7QUFBQSxJQUVBLEtBQUs7QUFBQSxNQUNELFlBQVksV0FBVyxPQUFPO0FBQUEsTUFDOUIsVUFBVSxXQUFXLENBQUMsZ0JBQWdCLElBQUk7QUFBQSxJQUM5QztBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ0oseUJBQXlCO0FBQUEsSUFDN0I7QUFBQSxJQUNBLGVBQWUsQ0FBQyxZQUFZLGFBQWEsWUFBWSxVQUFVO0FBQUEsSUFDL0QsU0FBUyxDQUFDLFFBQVEsR0FBRyxNQUFNLEVBQUUsY0FBYyxNQUFNLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQUEsSUFDdEUsTUFBTTtBQUFBLE1BQ0YsT0FBTztBQUFBLFFBQ0g7QUFBQSxVQUNJLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxRQUNqQjtBQUFBLE1BQ0o7QUFBQTtBQUFBLE1BSUEsU0FBUztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLEVBQ0o7QUFDSixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
