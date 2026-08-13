// Prefix a public-asset path with Vite's base URL so it works on
// GitHub Pages project sites ("/<repo>/") as well as root deploys.
export const withBase = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;
