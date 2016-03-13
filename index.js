var bel = require('bel')

module.exports = function (opts) {
  var opts = opts || {}
  var width = opts.width || 480
  var styles = opts.styles || ''

  var controls = !!!opts.controls
  var poster = opts.poster || ''
  var mp4Src = opts.mp4Src ? bel`<source src=${opts.mp4Src} type="video/mp4">` : ''
  var oggSrc = opts.oggSrc ? bel`<source src=${opts.oggSrc} type="video/ogg">` : ''
  var webSrc = opts.webSrc ? bel`<source src=${opts.webSrc} type="video/webm">` : ''

  return bel`<video width=${width} style=${styles} controls=${controls} poster=${poster} >
    ${mp4Src}
    ${oggSrc}
    ${webSrc}
    Your browser doesn't support HTML5 video tag.
  </video>`
}
