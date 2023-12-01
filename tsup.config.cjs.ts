import replaceInFileSync from "replace-in-file";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs"],
  outDir: "dist",
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: false,
  onSuccess: async () => {
    replaceInFileSync({
      files: "dist/index.cjs",
      from: /import.meta.env/g,
      to: "process.env",
    });
    return;
  },
});
