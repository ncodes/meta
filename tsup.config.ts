import replaceInFileSync from "replace-in-file";
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm"],
  outDir: "dist",
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: false,
  onSuccess: async () => {
    replaceInFileSync({
      files: "dist/index.js",
      from: /process.env/g,
      to: "import.meta.env",
    });
    return;
  },
});
