/**
 * Created by Administrator on 2018/7/9 0009.
 */
/**
 * 根据id属性的值，返回对应的标签元素
 * @param id  id的属性的值
 * @returns {Element} 返回值是对应的标签元素
 */
function my$(id){
    return document.getElementById(id);
}
/**
 * innerText和textContent兼容代码
 * @param element text 对象和文本内容
 * @param text 返回值是文本内容
 */
function setInnerText(element,text){
    if(typeof element.textConcent =="underfined"){//不支持
        element.innerText=text;
    }else{
        element.textContent=text;
    }
}
function getInnerText(element){
    if(typeof element.textContent=="underfined"){
        return element.innerText;
    }else{
        return element.textConcent;
    }
}