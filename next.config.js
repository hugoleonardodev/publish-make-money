// Uncomment for bundles analyses
const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// module.exports = withBundleAnalyzer({});

const withImages = require('next-images');

module.exports = withPlugins([
  withBundleAnalyzer,
  withImages,
  {
    fileExtensions: ['jpg', 'jpeg', 'png', 'gif'],
    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });
      return config;
    },
  },
]);
