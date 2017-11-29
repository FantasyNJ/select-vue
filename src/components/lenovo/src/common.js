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
// 获取元素样式
export const getStyleComputed = function(obj,attr){
  if(obj.currentStyle){
    return obj.currentStyle[attr];    //低版本IE
  }else{
    return getComputedStyle(obj)[attr];  //标准浏览器
  }
}
// 获取可以滚动的父级
export const getScrollParent = function(element) {
  var parent = element.parentNode;

  // debugger;

  if (!parent) {
    return;
  }

  // 父级是document，返回document，已经是顶层
  if (parent === document) {
    // if (document.body.scrollTop) {
      return parent;
    // } else {
    //   console.log('document')
    //   return document.documentElement;
    // }
  }

  if (['scroll', 'auto'].indexOf(getStyleComputed(parent, 'overflow')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputed(parent, 'overflow-x')) !== -1 || ['scroll', 'auto'].indexOf(getStyleComputed(parent, 'overflow-y')) !== -1) {
    return parent;
  }
  return getScrollParent(parent);
}
// 获取元素的所有可滚动的元素
export const getAllScrollParents = function(element){

  // 元素不存在
  if( !element ){
    return [];
  }

  // 获取可滚动的父级
  var scrollParent = getScrollParent(element);

  var arrScrollParents = [];

  console.log(scrollParent, 'scrollParent')

  // 如果scrollParent存在返回
  if(scrollParent){
    return arrScrollParents.concat( scrollParent, getAllScrollParents(scrollParent) );
  }else {
    return [];
  }
}
