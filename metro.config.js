const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Cache'i temizle
config.resetCache = true;

// Nanoid için özel alias
config.resolver.alias = {
  '@': path.resolve(__dirname, './'),
  'nanoid/non-secure': path.resolve(__dirname, 'node_modules/nanoid/non-secure/index.js'),
  'nanoid': path.resolve(__dirname, 'node_modules/nanoid/index.js'),
};

module.exports = config; 