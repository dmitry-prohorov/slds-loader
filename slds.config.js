module.exports = {
  // Default for the style loading
  styleLoader: "style-loader!css-loader!sass-loader",

  // If you want to use the ExtractTextPlugin
  //styleLoader: require("extract-text-webpack-plugin").extract("style-loader", "css-loader!sass-loader"),

  // Use sldsCustomizations to utilize other sass variables defined in
  // design-tokens.scss file. This is useful to set one customization value based
  // on another value.
  //sldsCustomizations: "./_slds.config.scss",
  
  styles: {
    "activity-timeline": true, 
    "breadcrumbs": true, 
    "button-groups": true, 
    "buttons": true, 
    "icons": true, 
    "cards": true, 
    "forms": true, 
    "tooltips": true, 
    "page-headers": true, 
    "panels": true, 
    "popovers": true, 
    "menus": true, 
    "datepickers": true, 
    "docked-composer": true, 
    "publishers": true, 
    "feeds": true, 
    "modals": true, 
    "pills": true, 
    "process": true, 
    "spinners": true, 
    "tiles": true, 
    "tabs": true, 
    "navigation": true, 
    "notifications": true, 
    "lookups": true, 
    "images": true, 
    "badges": true, 
    "data-tables": true, 
    "trees": true
  }
};
