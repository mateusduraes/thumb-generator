# Thumb Generator

Thumb Generator is a javascript library that use's HTML5 Canvas API to generate simple thumbnails.

### Installation

```shell
$ npm install --save thumb-generator
```

### Usage

```javascript
import thumbGenerator from 'thumb-generator';
const base64 = thumbGenerator({
  width: 300,
  height: 300,
  text: 'T',
});
```

It will give you a base64 that renders an image just like the following.

<p align="center">
  <img src="thumb-example.png" alt="">
</p>

### Parameters

| Property | Description                                                   |
| -------- | ------------------------------------------------------------- |
| width    | Width of the canvas, default: 200                             |
| height   | Height of the canvas, default: 200                            |
| color    | Color to fill the thumbnail, default is a random color.       |
| text     | The text that will be inserted in the center of the thumbnail |

# TSDX Bootstrap

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Local Development

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab.

<img src="https://user-images.githubusercontent.com/4060187/52168303-574d3a00-26f6-11e9-9f3b-71dbec9ebfcb.gif" width="600" />

Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder.
The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

<img src="https://user-images.githubusercontent.com/4060187/52168322-a98e5b00-26f6-11e9-8cf6-222d716b75ef.gif" width="600" />

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.
