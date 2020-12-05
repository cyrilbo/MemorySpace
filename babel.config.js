module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-transform-typescript-metadata',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@card': './src/modules/card',
          '@topic': './src/modules/topic',
          '@srs': './src/modules/srs',
          '@core': './src/core',
          '@pages': './src/pages',
          '@providers': './src/providers',
          '@navigation': './src/navigation',
          '@root': '.',
        },
      },
    ],
  ],
};
