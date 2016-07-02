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
  var styleLoader = config.styleLoader || "style-loader!css-loader!sass-loader";

  return "require(" + JSON.stringify("-!" + styleLoader + "!" +
    require.resolve("./slds-styles.loader.js") + "!" + configFilePath) + ");";
};
