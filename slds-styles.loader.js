var styles = [
  "activity-timeline",
  "app-launcher",
  "badges",
  "breadcrumbs",
  "button-groups",
  "button-icons",
  "buttons",
  "cards",
  "data-tables",
  "datepickers",
  "docked-composer",
  "docked-utility-bar",
  "feeds",
  "file-selector",
  "forms",
  "global-header",
  "global-navigation",
  "icons",
  "images",
  "lookups",
  "menus",
  "modals",
  "navigation",
  "notifications",
  "page-headers",
  "panels",
  "picklist",
  "pills",
  "popovers",
  "process",
  "publishers",
  "spinners",
  "tabs",
  "tiles",
  "tooltips",
  "trees"
];


var components = {
  // Activity Timeline
  "activity-timeline" : [
    "activity-timeline/index"
  ],

  // App Launcher
  "app-launcher": [
    "app-launcher/index"
  ],

  // Badges
  "badges": [
    "badges/index"
  ],

  // Breadcrumbs
  "breadcrumbs": [
    "breadcrumbs/flavors/base/index",
    "breadcrumbs/index"
  ],

  // Button Groups
  "button-groups": [
    "button-groups/index"
  ],

  // Button Groups
  "button-icons": [
    "button-icons/flavors/base/index"
  ],

  // Button
  "buttons": [
    "buttons/flavors/base/index",
    "buttons/flavors/stateful/index"
  ],

  // Card
  "cards": [
    "cards/index",
    "cards/flavors/base-compact/index"
  ],

  // Tables
  "data-tables": [
    "data-tables/index",
    "data-tables/flavors/advanced/index",
    "data-tables/flavors/basic/index",
    "data-tables/flavors/compact/index",
    "data-tables/flavors/fixed-header/index",
    "data-tables/flavors/inline-edit/index",
    "data-tables/flavors/responsive/index"
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
    "docked-composer/flavors/note/index",
    "docked-composer/flavors/task/index"
  ],

  //Docked Utility Bar
  "docked-utility-bar": [
    "docked-utility-bar/flavors/utility-bar/index",
    "docked-utility-bar/flavors/utility-panel/index"
  ],

  // Discussion Feed
  "feeds": [
    "feeds/flavors/comment/index",
    "feeds/flavors/feed-list/index",
    "feeds/flavors/post/index",
    "feeds/flavors/post-with-attachments/index"
  ],

  //File Selector
  "file-selector": [
    "file-selector/index"
  ],

  // Forms
  "forms": [
    "forms/index",
    "forms/flavors/checkbox/index",
    "forms/flavors/checkbox-alternate/index",
    "forms/flavors/checkbox-toggle/index",
    "forms/flavors/compound-form/index",
    "forms/flavors/docked-form-footer/index",
    "forms/flavors/horizontal-form/index",
    "forms/flavors/inline-form/index",
    "forms/flavors/input/index",
    "forms/flavors/multi-select/index",
    "forms/flavors/radio/index",
    "forms/flavors/radio-group-alternate/index",
    "forms/flavors/select/index",
    "forms/flavors/stacked-form/index",
    "forms/flavors/textarea/index"
  ],

  //Global Header
  "global-header": [
    "global-header/flavors/base/index"
  ],

  //Global Navigation
  "global-navigation": [
    "global-navigation/index"
  ],

  // Icons
  "icons": [
    "icons/index",
    "icons/flavors/base/index",
    "icons/flavors/icon-colors/index",
    "icons/flavors/sizes/index"
  ],

  // Images
  "images": [
    "images/flavors/avatar/index",
    "images/flavors/figure/index"
  ],

  // Lookup
  "lookups": [
    "lookups/index"
  ],

  // Menus
  "menus": [
    "menus/index",
    "menus/flavors/action-overflow/index"
  ],

  // Modal
  "modals": [
    "modals/index"
  ],

  // Navigation
  "navigation": [
    "navigation/flavors/vertical/index"
  ],

  // Notifications -- Toasts & Alerts
  "notifications": [
    "notifications/index",
    "notifications/flavors/alert/index",
    "notifications/flavors/modal-toast/index",
    "notifications/flavors/prompt/index"
  ],

  // Page Headers
  "page-headers": [
    "page-headers/index",
    "page-headers/flavors/object-home/index",
    "page-headers/flavors/record-home/index",
    "page-headers/flavors/record-home-vertical/index"
  ],

  // Panels
  "panels": [
    "panels/index",
    "panels/flavors/detail/index",
    "panels/flavors/filtering/index"
  ],

  // Picklist
  "picklist": [
    "picklist/index"
  ],

  // Pills
  "pills": [
    "pills/index"
  ],

  // Popovers
  "popovers": [
    "popovers/index",
    "popovers/flavors/nubbins/index",
    "popovers/flavors/panels/index"
  ],

  // Process
  "process": [
    "process/flavors/sales-path-coach/index",
    "process/flavors/wizard/index"
  ],

  // Publishers
  "publishers": [
    "publishers/index",
    "publishers/flavors/comment/index",
    "publishers/flavors/discussion-feed/index"
  ],

  // Spinners
  "spinners": [
    "spinners/index",
    "spinners/flavors/brand-small/index",
    "spinners/flavors/inverse-small/index",
    "spinners/flavors/large/index",
    "spinners/flavors/medium/index",
    "spinners/flavors/small/index"
  ],

  // Tabs
  "tabs": [
    "tabs/flavors/default/index",
    "tabs/flavors/scoped/index",
    "tabs/flavors/scrolling/index"
  ],

  // Title
  "tiles": [
    "tiles/index",
    "tiles/flavors/board/index"

  ],

  // Tooltip - This is deprecated
  "tooltips": [
    "tooltips/index"
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
  var start =
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

  if (config.globalWrapperClass !== undefined && config.globalWrapperClass !== '') {
    source = config.globalWrapperClass + ' {' + source + '}';
  }

  return source;
}
