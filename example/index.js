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
