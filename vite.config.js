import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs/promises";

export default defineConfig({
  base: "/bestbankprojectreact",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: "src/main.js",
      external: ["uuid"],
    },
  },
  esbuild: {
    loader: "jsx",
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    esbuildOptions: {
      plugins: [
        {
          name: "load-js-files-as-jsx",
          setup(build) {
            build.onLoad({ filter: /src\/.*\.js$/ }, async (args) => ({
              loader: "jsx",
              contents: await fs.readFile(args.path, "utf8"),
            }));
          },
        },
      ],
    },
  },
});
