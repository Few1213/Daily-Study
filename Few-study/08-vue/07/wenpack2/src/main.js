import $ from 'jquery'

$(function () {
    $('li:even').css('color', 'green')
    $('li:odd').css('color', 'red')
    console.log('今天是个好日子')
  })