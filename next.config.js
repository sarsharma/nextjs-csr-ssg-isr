module.exports = {
  output: 'standalone',
  eslint: {
    dirs: ['src'],
  },
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};
