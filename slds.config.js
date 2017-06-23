module.exports = {
  // Default for the style loading
  styleLoaders: ["style-loader", "css-loader", "sass-loader"],

  // If you want to use the ExtractTextPlugin
  //extractStyles: true,

  // Use sldsCustomizations to utilize other sass variables defined in
  // design-tokens.scss file. This is useful to set one customization value based
  // on another value.
  //sldsCustomizations: "./_slds.config.scss",
  

  // if global wrapper class is needed to prevent style bleed in Visualforce pages.
  // set value to and empty string if no wrapper class is needed.
  //globalWrapperClass: "",

  // types equals to slds index files ["visualforce", "internal", "lightning", "scoped", "default"]
  // visualforce will load index-vf.scss
  // internal will load index-internal.scss
  // lightning will load index-ltng.scss
  // scoped will load index-scoped.scss
  // default will load be loaded by default if not specified, file index.scss
  //type: "visualforce",

};
