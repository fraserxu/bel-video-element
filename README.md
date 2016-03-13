# bel-video-element
A simple video element with bel

![bel-video-element](https://cloud.githubusercontent.com/assets/1183541/13726243/b4e02c2e-e912-11e5-813f-59d435732d28.gif)

### Install

```
$ npm i bel-video-element --save
```

### Usage

```JavaScript
var Video = require('bel-video-element')
var bel = require('bel')

function render () {
  var opts = {
    poster: 'example/sources/rides.png',
    mp4Src: 'example/sources/rides.mp4'
  }
  return bel`${Video(opts)}`
}

var app = render()
document.body.appendChild(app)
```

#### Options

* `Width` 480 - The width of the video
* `Styles` object - The style object
* `Controls` boolean - Whether to show controls, default to true
* `poster` String - The src of the poster url
* `mp4Src` String - Mp4 format src
* `oggSrc` String - ogg format src
* `webmSrc` String - webm format src

#### License
(c) 2016 Fraser Xu. MIT License
