// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname, {
  // Do not disable CSS support when using Tailwind.
  isCSSEnabled: true,
});
// Import the Expo superclass which has support for PostCSS.
const { FileStore } = require("@expo/metro-config/file-store");

config.cacheStores = [
  new FileStore({
    root: "/path/to/custom/cache",
  }),
];

module.exports = config;
