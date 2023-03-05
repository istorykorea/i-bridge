import * as path from "path";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    alias: {
      "@components": path.resolve("src/lib/components"),
      "@constants": path.resolve("src/lib/constants"),
      "@store": path.resolve("src/lib/store"),
      "@utils": path.resolve("src/lib/utils"),
    },
  },
};

export default config;
