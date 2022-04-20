// noinspection JSLastCommaInArrayLiteral,JSLastCommaInObjectLiteral

const configuration = {
  poweredByHeader: false,
  webpack: (config) => {
    config = {
      ...config,
      module: {
        ...config.module,
        rules: [
          ...config.module.rules,
          {test: /\.txt$/, use: 'null-loader'},
        ],
      },
    };
    return config;
  },
};

module.exports = configuration;
