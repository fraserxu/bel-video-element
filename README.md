# bel-video-element
A simple video element with bel

### Usage

```JavaScript
var Video = require('../index.js')
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
