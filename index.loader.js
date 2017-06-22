module.exports = function () {};
module.exports.pitch = function (remainingRequest) {
  // Webpack 1.7.3 uses this.resourcePath. Leaving in remaining request for possibly older versions
  // of Webpack
  var configFilePath = this.resourcePath || remainingRequest;
  this.cacheable(true);

  if (!configFilePath || configFilePath.trim() === "") {
    var msg = "You specified the slds-loader with no configuration file. Please specify" +
      " the configuration file, like: \"slds-loader!./slds.config.js\" or use" +
      " require(\"slds-loader\").";
    console.error("ERROR: " + msg);
    throw new Error(msg);
  }

  var config = require(configFilePath);

  var styleLoaders = config.styleLoaders || ['style-loader', 'css-loader', 'sass-loader'];
  if (config.extractStyles) {
    styleLoaders = [
      require('extract-text-webpack-plugin').loader().loader + '?{"omit":1,"remove":true}',
      styleLoaders.join('!'),
    ];
  }

  return 'require(' + JSON.stringify('-!' + styleLoaders.join('!') + '!' +
    require.resolve("./slds-styles.loader.js") + "!" + configFilePath) + ");";
};
