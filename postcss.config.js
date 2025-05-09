/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},   // ✅ Usar el nuevo plugin
    autoprefixer: {},
  },
};
