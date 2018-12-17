import $ from 'jquery'
import './main.css'
import './main1.less'
$(function () { 
    $('li:odd').css('color','red')
    $('li:even').css('color','green')
    console.log('输出成功了121');
 })