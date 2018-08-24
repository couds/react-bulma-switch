# NOT MAINTAINED ANYMORE. 

Sorry if you were using this repo, I'mnot maintaining it anymore, I have my hand full with react-bulma-components and other projects.


# <div style="display: flex; align-items: center"><img src="https://raw.githubusercontent.com/couds/react-bulma-components/master/docs/images/logo.png" width="40" style="margin-top: 3px" /><span>React-bulma-switch</span></div>


[![Build Status](https://travis-ci.org/couds/react-bulma-switch.svg?branch=master)](https://travis-ci.org/couds/react-bulma-switch)
[![Coverage Status](https://coveralls.io/repos/github/couds/react-bulma-switch/badge.svg?branch=master)](https://coveralls.io/github/couds/react-bulma-switch?branch=master)
[![Release Version](https://img.shields.io/github/release/couds/react-bulma-switch.svg)](https://github.com/couds/react-bulma-switch)
[![Npm Downloads](https://img.shields.io/npm/dm/react-bulma-switch.svg)](https://www.npmjs.com/package/react-bulma-switch)


React component for Bulma Switch extension using [React-Bulma-Components](https://couds.github.io/react-bulma-components/)


You can find the Storybook of all components [here](https://couds.github.io/react-bulma-switch/)

### To Install

```
npm install react-bulma-components react-bulma-switch
```

or

```
yarn add -E react-bulma-components react-bulma-switch
```

### To Use

```javascript
import React from 'react';
// You can import from the global component (you will need to include the css file dist/react-bulma-switch.min.css)
import Switch from 'react-bulma-switch';

// You can also include the js that also bundle the ccs (do not work with server-side rendering)
import switch from 'react-bulma-switch/full';

// [RECOMENDED]  If you use this approach configure webpack to handle sass files
import Switch from 'react-bulma-switch/lib';

export default () => (
  <div>
    <Switch value rounded>Switch Rounded</Switch>
    <Switch value thin>Switch Thin</Switch>
    <Switch value rtl>Switch Text on the left</Switch>
    <Switch value outlined>Switch Text on the left</Switch>
  </div>
);
```

### Documentation

You can find the documentation in https://couds.github.io/react-bulma-switch

Each component import his own sass file, in this way you can reduce your css total file only including the styles you use, to enable this please configure your [Webpack](https://webpack.github.io/) to handle sass files. You can use the webpack.config.js on the root folder of this repository

Some api/naming may vary of convention with the Bulma Docs, please refear to each storybook to see how to use each component (you can find the source code of the story usin ght button "Show info" on the top-right corner)

### Override Bulma variables

To Override the variables set by Bulma you will need to create a sass file like this one (_variable.sass)

```sass
@import '~bulma/sass/utilities/initial-variables.sass'

// ADD HERE variables you want to override
$primary: #f4f4f4

@import '~bulma/sass/utilities/_all.sass'
```

After that you will need to add to your webpack configuration an alias pointing to the file

```
resolve {
  // Other resolve props
  alias: {
    // Other aliases
    '_variables.sass': path.resolve(__dirname, 'relative/path/to/your/file/from/webpack/config/file'),
  },
}

```


This page is open source. Noticed a typo? Or something unclear? Improve this page on [GitHub](https://github.com/couds/react-bulma-switch/blob/master/README.md)
