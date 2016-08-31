var styles = [
  "activity-timeline", 
  "breadcrumbs", 
  "button-groups", 
  "buttons", 
  "icons", 
  "cards", 
  "forms", 
  "tooltips", 
  "page-headers", 
  "panels", 
  "popovers", 
  "menus", 
  "datepickers", 
  "docked-composer", 
  "publishers", 
  "feeds", 
  "modals", 
  "pills", 
  "process", 
  "spinners", 
  "tiles", 
  "tabs", 
  "navigation", 
  "notifications", 
  "lookups", 
  "images", 
  "badges", 
  "data-tables", 
  "trees"
];


var components = {
  // Activity Timeline
  "activity-timeline" : [
    "activity-timeline/index"
  ],

  // Badges
  "badges": [
    "badges/index"
  ],

  // Breadcrumbs
  "breadcrumbs": [
    "breadcrumbs/index"
  ],

  // Button Groups
  "button-groups": [
    "button-groups/index"
  ],

  // Button
  "buttons": [
    "buttons/flavors/base/index",
    "buttons/flavors/stateful/index",
    "buttons/flavors/icon/index"
  ],

  // Icons
  "icons": [
    "icons/index",
    "icons/flavors/icon-colors/index",
    "icons/flavors/sizes/index"
  ],

  // Card
  "cards": [
    "cards/index"
  ],

  // Forms
  "forms": [
    "forms/index",
    "forms/flavors/input/index",
    "forms/flavors/textarea/index",
    "forms/flavors/radio/index",
    "forms/flavors/radio-group-alternate/index",
    "forms/flavors/checkbox/index",
    "forms/flavors/checkbox-toggle/index",
    "forms/flavors/select/index",
    "forms/flavors/checkbox-alternate/index",
    "forms/flavors/multi-select/index",
    "forms/flavors/edit-dialog-for-touch/index",
    "forms/flavors/horizontal-form/index",
    "forms/flavors/stacked-form/index",
    "forms/flavors/inline-form/index",
    "forms/flavors/compound-form/index"
  ],

  // Tooltip - This is deprecated
  "tooltips": [
    "tooltips/flavors/base/index"
  ],

  // Page Headers
  "page-headers": [
    "page-headers/index",
    "page-headers/flavors/record-home/index"
  ],

  // Panels
  "panels": [
    "panels/index"
  ],

  // Popovers
  "popovers": [
    "popovers/index",
    "popovers/flavors/tooltips/index",
    "popovers/flavors/panels/index",
    "popovers/flavors/nubbins/index"
  ],

  // Menus
  "menus": [
    "menus/index",
    "menus/flavors/picklist/index",
    "menus/flavors/action-overflow/index",
    "menus/flavors/action-overflow-for-touch/index"
  ],

  // Datepicker
  "datepickers": [
    "datepickers/index",
    "datepickers/flavors/time/index"
  ],

  // Docked Composer
  "docked-composer": [
    "docked-composer/index",
    "docked-composer/flavors/email/index",
    "docked-composer/flavors/task/index"
  ],

  // Publishers
  "publishers": [
    "publishers/index",
    "publishers/flavors/discussion-feed/index",
    "publishers/flavors/comment/index"
  ],

  // Discussion Feed
  "feeds": [
    "feeds/flavors/discussion-feed/index",
    "feeds/flavors/comment/index"
  ],

  // Modal
  "modals": [
    "modals/index"
  ],

  // Pills
  "pills": [
    "pills/index"
  ],

  // Process
  "process": [
    "process/flavors/wizard/index",
    "process/flavors/sales-path-coach/index"
  ],

  // Spinners
  "spinners": [
    "spinners/index",
    "spinners/flavors/small/index",
    "spinners/flavors/medium/index",
    "spinners/flavors/large/index",
    "spinners/flavors/brand-small/index",
    "spinners/flavors/inverse-small/index"
  ],

  // Title
  "tiles": [
    "tiles/index",
    "tiles/flavors/board/index"
  ],

  // Tabs
  "tabs": [
    "tabs/flavors/default/index",
    "tabs/flavors/scoped/index"
  ],

  // Navigation
  "navigation": [
    "navigation/flavors/vertical/index",
    "navigation/flavors/context-bar/index"
  ],

  // Notifications -- Toasts & Alerts
  "notifications": [
    "notifications/index",
    "notifications/flavors/alert/index",
    "notifications/flavors/prompt/index",
    "notifications/flavors/modal-toast/index"
  ],

  // Lookup
  "lookups": [
    "lookups/index"
  ],

  // Images
  "images": [
    "images/flavors/avatar/index"
  ],

  // Tables
  "data-tables": [
    "data-tables/index",
    "data-tables/flavors/responsive/index"
  ],

  // Tree (Order matters)
  "trees": [
    "trees/flavors/base/index",
    "trees/flavors/grid/index"
  ]
};


module.exports = function (content) {
  this.cacheable(true);

  var config = this.exec(content, this.resourcePath);
  var start = (config.globalWrapperClass !== '') ? config.globalWrapperClass + ' {': '';
  start +=
    //slds configs
      "@import             \"~@salesforce-ux/design-system/scss/design-tokens\";\n"
    + "@import             \"~@salesforce-ux/design-system/scss/config\";\n"
    //path to slds images and fonts
    + "$static-image-path: \"~@salesforce-ux/design-system/assets/images/\";\n"
    + "$static-font-path:  \"~@salesforce-ux/design-system/assets/fonts/webfonts\";\n"
    //standard style components
    + "@import             \"~@salesforce-ux/design-system/scss/vendor/deprecate\";\n"
    + "@import             \"~@salesforce-ux/design-system/scss/dependencies/index\";\n"
    + "@import             \"~@salesforce-ux/design-system/scss/core/font\";\n"
    + "@import             \"~@salesforce-ux/design-system/scss/vendor/normalize\";\n"
    + "@import             \"~@salesforce-ux/design-system/scss/core/core\";\n";

  //custom styles
  if (config.sldsCustomizations) {
    start += "@import \"" + config.sldsCustomizations + "\";\n";
  }

  //slds components
  source = start + styles.filter(function (style) {
    return config.styles[style];
  }).map(function (style) {
      var sldsStyles = components[style] || [];
      return sldsStyles.map(function(style) {
        return "@import \"~@salesforce-ux/design-system/scss/components/" + style + "\";";
      }).join("\n"); 
  }).join("\n");

  //utilities
  source +=
    "\n@import             \"~@salesforce-ux/design-system/scss/utilities/index\";\n"
    + "@import             \"~@salesforce-ux/design-system/scss/vendor/html5boilerplate-print\";";

  source += (config.globalWrapperClass !== '') ? '}': '';

  return source;
}
