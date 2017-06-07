slds-loader
========================

Salesforce Lightning Design System (slds) configuration and loading package for webpack, using @salesforce-ux.

Based on [font-awesome-sass-loader](https://github.com/francisbesset/font-awesome-sass-loader) by [Francis Besset](https://github.com/francisbesset) ([@francisbesset](https://www.npmjs.com/~francisbesset)).

Usage
-----

To properly load @salesforce-ux fonts, you need to configure loaders in your `webpack.config.js`. Example:

``` javascript
module.exports = {
  module: {
    loaders: [
      // the url-loader uses DataUrls.
      // the file-loader emits files.
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff"},
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream"},
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file"},
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}
    ]
  }
};
```

The Regex for font types are adjusted to support these formats. Regex also support urls ending with .woff, .ttf, .eot and .svg.

### Complete SLDS

To use the complete slds package including all styles with the default settings:

``` javascript
require("slds-loader");
```

### Custom configuration

You can configurate slds-loader with two configuration files:

* `slds.config.js`
* and set `sldsCustomizations` option

Add both files *next to each other* in your project. Then:

``` javascript
require("slds-loader!./path/to/slds.config.js");
```

Or simple add it as entry point to your `webpack.config.js`:

``` javascript
module.exports = {
  entry: [
    "slds-loader!./path/to/slds.config.js",
    "your-existing-entry-point"
  ]
};
```

#### `slds.config.js`

Example:

``` javascript
module.exports = {
  sldsCustomizations: "./_slds.config.scss",

  // if global wrapper class is needed to prevent style bleed in Visualforce pages.
  // set value to and empty string if no wrapper class is needed.
  globalWrapperClass: '.yourGlobalClassName',

  styles: {
    "activity-timeline": true,

    "datepickers": true,
    "modals": true,

    "spinners": true,
    "tabs": true,
  }
};
```

### _slds.config.scss

Imported after SLDS's default configuration, but before components and untilities.

You may customize SLDS here.

Example:

``` sass
$color-background-inverse: #eee;
$color-background-path-complete: #ddd;
```

### extract-text-webpack-plugin

Configure style loader in `slds.config.js`.

Example:

``` javascript
module.exports = {
  styleLoader: require("extract-text-webpack-plugin").extract("style-loader", "css-loader!sass-loader"),

  styles: {
    ...
  }
};
```

Install `extract-text-webpack-plugin` before using this configuration.