export function isDev() {
  const env =
    process.env.NODE_ENV ??
    process.env.NEXT_PUBLIC_NODE_ENV ??
    import.meta.env.VITE_NODE_ENV;
  return env === "development";
}
