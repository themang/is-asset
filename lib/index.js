/**
 * Expose is-asset
 */

module.exports = isAsset

/**
 * isAsset
 */

var re = /.*\.(gif|jpg|jpeg|png|ico|tiff|bmp|css|woff|ttf|eot|svg)$/
function isAsset (file) {
  return re.test(file)
}
