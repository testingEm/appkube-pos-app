const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig();
  return {
    resolver: {
      assetExts: [...defaultConfig.resolver.assetExts, 'db'],
    },
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
    },
    // Add any additional configurations as needed
  };
})();
