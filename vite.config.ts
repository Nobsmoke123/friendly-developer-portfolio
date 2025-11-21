import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import devtoolsJson from "vite-plugin-devtools-json";

export default defineConfig({
  plugins: [
    tailwindcss(),
    devtoolsJson(), // remove unnecessary error logs on the console
    reactRouter(),
    tsconfigPaths({
      projects: ["./tsconfig.json"],
      // ignoreConfigErrors: true,
    }),
  ],
});
