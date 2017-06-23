var sldsTypes = {
  visualforce: 'index-vf',
  default: 'index',
  lightning: 'index-ltng',
  internal: 'index-internal',
  scoped: 'index-scoped'
};

module.exports = function (content) {
  this.cacheable(true);

  var config = this.exec(content, this.resourcePath);
  var type = sldsTypes.default;
  var source = 
    //path to slds images and fonts
    "$static-image-path: \"~@salesforce-ux/design-system/assets/images/\";\n"
    + "$static-font-path:  \"~@salesforce-ux/design-system/assets/fonts/webfonts\";\n"

    if (config.type && sldsTypes[config.type])
      type = sldsTypes[config.type];

    source += "@import  \"~@salesforce-ux/design-system/scss/" + type + "\";\n";

  if (config.globalWrapperClass && config.globalWrapperClass !== "")
    source = config.globalWrapperClass + " {" + source + "}";

  return source;
}