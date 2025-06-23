const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Cache'i temizle
config.resetCache = true;

// TypeScript dosyalarını düzgün çözümlemek için
config.resolver.sourceExts = ['js', 'jsx', 'ts', 'tsx', 'json'];

// Asset çözümleme
config.resolver.assetExts = [
  ...config.resolver.assetExts,
  'db', 'mp3', 'ttf', 'obj', 'png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'
];

// Nanoid sorunu için resolver ayarları - React Native için öncelik
config.resolver.resolverMainFields = ['react-native', 'module', 'main'];
config.resolver.platforms = ['ios', 'android', 'native', 'web'];

// Nanoid için özel alias
config.resolver.alias = {
  '@': path.resolve(__dirname, './'),
  'nanoid/non-secure': path.resolve(__dirname, 'node_modules/nanoid/non-secure/index.js'),
  'nanoid': path.resolve(__dirname, 'node_modules/nanoid/index.js'),
};

// Nanoid modülü için özel çözümleme
config.resolver.resolveRequest = (context, moduleName, platform) => {
  if (moduleName === 'nanoid/non-secure') {
    return {
      filePath: path.resolve(__dirname, 'node_modules/nanoid/non-secure/index.js'),
      type: 'sourceFile',
    };
  }
  
  if (moduleName === 'nanoid') {
    return {
      filePath: path.resolve(__dirname, 'node_modules/nanoid/index.js'),
      type: 'sourceFile',
    };
  }
  
  // Varsayılan çözümleme
  return context.resolveRequest(context, moduleName, platform);
};

module.exports = config; 