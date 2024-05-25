//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: "server",
  routeRules: {
    '/example': { proxy: 'https://example.com' },
    '/yts/**': { proxy: 'https://yts.mx/api/v2/**' },
    '/tmdb/**': { proxy: 'https://api.themoviedb.org/3/**' },
  },
});
