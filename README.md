<p align="center">
  <img src="logo.png" alt="">
</p>

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
