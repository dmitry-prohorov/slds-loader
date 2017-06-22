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
  globalWrapperClass: '',

  styles: {
    "activity-timeline": true,
    "app-launcher": true,
    "badges": true,
    "breadcrumbs": true,
    "button-groups": true,
    "button-icons": true,
    "buttons": true,
    "cards": true,
    "data-tables": true,
    "datepickers": true,
    "docked-composer": true,
    "docked-utility-bar": true,
    "feeds": true,
    "file-selector": true,
    "forms": true,
    "global-header": true,
    "global-navigation": true,
    "icons": true,
    "images": true,
    "lookups": true,
    "menus": true,
    "modals": true,
    "navigation": true,
    "notifications": true,
    "page-headers": true,
    "panels": true,
    "picklist": true,
    "pills": true,
    "popovers": true,
    "process": true,
    "publishers": true,
    "spinners": true,
    "tabs": true,
    "tiles": true,
    "tooltips": true,
    "trees": true
  }
};
