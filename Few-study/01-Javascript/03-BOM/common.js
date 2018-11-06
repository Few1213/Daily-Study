/**
 * Created by Administrator on 2018/6/30 0030.
 */
/**
 * 根据id属性的值，返回对应的标签元素
 * @param id id属性的值，string
 * @returns {Element}  元素对象
 */
function my$(id) {
    return document.getElementById(id);
}
/**
 * [getDate description] 获取指定格式的时间
 * @param  {[type]} dt [description] 日期的对象
 * @return {[type]}    [description]	返回的是字符串的时间日期
 */
function getDate(dt){
			//获取年
			var year=dt.getFullYear();
			//获取月
			var month=dt.getMonth();
			//获取日
			var day=dt.getDate();
			//获取小时
			var hour=dt.getHours();
			//获取分钟
			var minute=dt.getMinutes();
			//获取秒
			var second=dt.getSeconds();

			month=month<10?"0"+month:month;
			day=day<10?"0"+day:day;
			hour=hour<10?"0"+hour:hour;
			minute=minute<10?"0"+minute:minute;
			second=second<10?"0"+second:second;
			return year+"年"+month+"月"+day+"日"+hour+"时"+minute+"分"+second+"秒";
		}

function addEventListener(element,type,fn) {
    if (element.addEventListener){
        element.addEventListener(type,fn,flase);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn)
    }else{
        element["on"+type]=fn;
    }
}
