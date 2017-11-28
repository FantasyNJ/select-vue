// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 自定义指令
Vue.directive('clickoutside', {
  bind: function (el, binding, vnode) {
    el.event = function (event) {
      console.log(el.dropmenu, 'el.dropmenu')
      console.log(event.target, 'event.target')


      // here I check that click was outside the el and his childrens
      if (!(el == event.target || el.contains(event.target) || el.dropmenu == event.target || el.dropmenu.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener('click', el.event)
  },
  unbind: function (el) {
    document.body.removeEventListener('click', el.event)
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
