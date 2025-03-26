import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
  output: "static",
  site: 'https://RolandoU548.github.io',
  base:'c2developergroup.github.io',
  integrations: [
    tailwind(),
    react({
      experimentalReactChildren: true,
    }),
  ],
});
