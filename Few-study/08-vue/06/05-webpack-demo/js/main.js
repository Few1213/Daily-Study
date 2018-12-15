// nodejs的模块化
const $ = require('jquery')

require('./aa')

$(function() {
  $('li:odd').css('color', 'red')
  $('li:even').css('color', 'green')
})