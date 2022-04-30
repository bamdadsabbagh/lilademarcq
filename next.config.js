// noinspection JSLastCommaInArrayLiteral,JSLastCommaInObjectLiteral

const {withPlaiceholder} = require('@plaiceholder/next');

const configuration = {
  poweredByHeader: false,
  images: {
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
          {test: /\.ttf$/, use: 'file-loader'},
        ],
      },
    };
    return config;
  },
};

module.exports = withPlaiceholder(configuration);
