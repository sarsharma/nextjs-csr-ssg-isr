module.exports = {
  output: 'standalone',
  eslint: {
    dirs: ['src'],
  },
  distDir: 'outputFolder',
  experimental: {
    // Defaults to 50MB
    isrMemoryCacheSize: 0,
  },
};
