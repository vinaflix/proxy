//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  preset: "cloudflare-pages",
  routeRules: {
    '/proxy/yts/**': { proxy: 'https://yts.mx/api/v2/**' },
    '/proxy/tmdb/**': { proxy: 'https://api.themoviedb.org/3/**' }
  },
});
