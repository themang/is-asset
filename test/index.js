var isAsset = require('..')
var assert = require('assert')

describe('isAsset', function () {

  it('should be true for path/file.png', function() {
    assert(isAsset('path/file.png'))
  })

  it('should be true for file.png', function() {
    assert(isAsset('file.png'))
  })

  it('should be true for file.jpeg', function() {
    assert(isAsset('file.jpeg'))
  })

  it('should be true for file.jpg', function() {
    assert(isAsset('file.jpg'))
  })

  it('should be true for file.gif', function() {
    assert(isAsset('file.gif'))
  })

  it('should be true for file.ico', function() {
    assert(isAsset('file.ico'))
  })

  it('should be true for file.css', function() {
    assert(isAsset('file.css'))
  })

  it('should be true for file.svg', function() {
    assert(isAsset('file.svg'))
  })

  it('should be true for file.ttf', function() {
    assert(isAsset('file.ttf'))
  })

  it('should be false for file.html', function() {
    assert(!isAsset('file.html'))
  })

  it('should be false for file.js', function() {
    assert(!isAsset('file.js'))
  })

  it('should be false for file.json', function() {
    assert(!isAsset('file.json'))
  })
})
