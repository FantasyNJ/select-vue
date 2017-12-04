<template>
  <div class="wrap" v-clickoutside="hideDrop">
    <div
      ref="slot"
      @click="handleClick"
    >
      <slot
        name="fire-lenovo"
      ></slot>
    </div>
    <drop
      ref="drop"
      v-show="dropVisible"
      :pos="pos"
    ></drop>
  </div>
</template>

<script>

  import Drop from './drop.vue';
  import { addEvent, removeEvent, getAllScrollParents, getBody, getStyleComputed } from './src/common';

export default {
  name: 'lenovo-input',
  data () {
    return {
      dropVisible:false,
      pos: {},
      slot: {},
      allScrollParents: {},
      dropHeight: 0,
      slotHeightSpace: 5,
      dir: 'down',
    }
  },
  beforeMount(){
    let t = this;
    t.$nextTick( () => {
      t.$el.dropmenu = t.$refs.drop.$el;

      window.dropmenu = t.$el.dropmenu;

      // 获取drop
      t.slot = t.$refs.slot;

      t.allScrollParents = getAllScrollParents(t.$el);

    } )
  },
  components: {
    'drop': Drop
  },
  methods: {
    handleClick(){
      let t = this;
      t.dropVisible = true;

//      t.$el.dropmenu.style.visibility = 'hidden';

      t.$nextTick( function(){
        // 获取drop的高度
        t.dropHeight = t.$el.dropmenu.offsetHeight;
//        t.$el.dropmenu.style.visibility = '';

        // 判断位置
        t.handleScroll();
        // 绑定滚动事件定位drop元素
        t.addScrollEvent();
      } )
    },
    hideDrop(){
      let t = this;
      t.dropVisible = false;
      // 解除滚动事件定位drop元素
      t.removeScrollEvent();
    },
    // 滚动计算drop的位置
    handleScroll(e){
      let t = this;

      // 滚动的目标元素，不在滚动事件触发时target设为document
      let target = {};

      // 获取document元素
      let documentElem = getBody();

      // 如果存在事件对象
      if(e){
        // 目标元素是document, document没有位置属性
        if(e.target === document){
          target = documentElem;
        }else{
          target = e.target;
        }
      }
      // 不存在事件对象，目标定位document
      else{
        target = documentElem
      }

      // 当前元素
      let slot = t.slot;


      let scrollTop = documentElem.scrollTop;
      let scrollLeft = documentElem.scrollLeft;


      let slotClient = slot.getBoundingClientRect();

      // 窗口下方位置
      let screenBottomPos = documentElem.scrollTop + target.clientHeight;
      // 下拉菜单下方位置
      let dropBottomPos = documentElem.scrollTop + slotClient.top + slot.clientHeight + t.slotHeightSpace + t.dropHeight;

      // 窗口上方位置
      let screenTopPos = documentElem.scrollTop;
      // 下拉菜单上方位置
      let dropTopPos = documentElem.scrollTop + slotClient.top - ( t.slotHeightSpace + t.dropHeight );

      // drop在上方时的top值
      let dropUpTop = slot.getBoundingClientRect().top + scrollTop - (slot.offsetHeight + 5);
      // drop在下方时的top值
      let dropDownTop = slot.getBoundingClientRect().top + scrollTop + slot.offsetHeight + 5;


      // 元素底部超过滚动元素底部，向上展示
      let top = 0;

      if( t.dir === 'down' ){
        if ( dropBottomPos >= screenBottomPos){
          top = slotClient.top + scrollTop - (t.slotHeightSpace + t.dropHeight);
          t.dir = 'up';
        }
        // 在下方展示
        else{
          top = slot.getBoundingClientRect().top + scrollTop + slot.offsetHeight + t.slotHeightSpace;
        }
      }else if( t.dir === 'up' ){
        if ( dropTopPos <= screenTopPos ){
          top = slot.getBoundingClientRect().top + scrollTop + slot.offsetHeight + t.slotHeightSpace;
          t.dir = 'down';
        }
        // 在上方展示
        else {
          top = slotClient.top + scrollTop - (t.slotHeightSpace + t.dropHeight);
        }
      }


      let left = slot.getBoundingClientRect().left + scrollLeft;

      t.pos = {
        top: top + 'px',
        left: left + 'px',
      }


    },
    addScrollEvent(){
      let t = this;
      t.allScrollParents.forEach(function (item) {
        addEvent(item, 'scroll', t.handleScroll)
      })
    },
    removeScrollEvent(){
      let t = this;
      t.allScrollParents.forEach(function (item) {
        removeEvent(item, 'scroll', t.handleScroll)
      })
    },

  },
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.wrap{
  position: relative;
  display: inline-block;
}
</style>
