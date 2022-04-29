// noinspection JSLastCommaInArrayLiteral,JSLastCommaInObjectLiteral

const configuration = {
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: [
      'images.ctfassets.net',
      'downloads.ctfassets.net',
    ],
  },
  webpack: (config) => {
    config = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {test: /\.md$/, use: 'null-loader'},
          {test: /\.ttf$/, use: 'file-loader'},
        ],
      },
    };
    return config;
  },
};

module.exports = configuration;
