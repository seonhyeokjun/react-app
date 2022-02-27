const path = require("path");

module.exports = function (config) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@": path.resolve(__dirname, "src"),
    },
  };

  return config;
};
