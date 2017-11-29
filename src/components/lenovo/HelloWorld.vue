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
  import { addEvent, removeEvent, getAllScrollParents } from './src/common'

export default {
  name: 'lenovo-input',
  data () {
    return {
      dropVisible:false,
      pos: {},
      slot: {},
      allScrollParents: {}
    }
  },
  beforeMount(){
    let t = this;
    t.$nextTick( () => {
      t.$el.dropmenu = t.$refs.drop.$el;

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
      t.handleScroll();
      // 绑定滚动事件定位drop元素
      t.addScrollEvent();
    },
    hideDrop(){
      let t = this;
      t.dropVisible = false;
      // 解除滚动事件定位drop元素
      t.removeScrollEvent();
    },
    // 滚动计算drop的位置
    handleScroll(){
      let t = this;

      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      let scrollLeft = document.documentElement.scrollLeft || document.body.scrollLeft;

      // scrollTop需要兼容
      let top = t.slot.getBoundingClientRect().top + scrollTop + t.slot.offsetHeight + 5;
      let left = t.slot.getBoundingClientRect().left + scrollLeft;

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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
