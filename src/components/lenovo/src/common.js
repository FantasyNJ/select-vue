//事件绑定
export const addEvent = function(obj,evname,fn){
  if(obj.addEventListener){
    obj.addEventListener(evname,fn,false);
  }else{
    obj.attachEvent('on'+evname, function(){
      fn.call(obj);
    });
  }
}
//事件取消
export const removeEvent = function(obj,evname,fn){
  if(obj.removeEventListener){
    obj.removeEventListener(evname,fn,false);
  }else{
    obj.detachEvent('on'+evname, fn);
  }
}
//获取样式
export const getStyle = function(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];    //低版本IE
  }else{
    return getComputedStyle(obj)[attr];  //标准浏览器
  }
}
