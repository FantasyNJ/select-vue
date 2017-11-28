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

export default {
  name: 'lenovo-input',
  data () {
    return {
      dropVisible:false,
      pos: {
        left: 0,
        top: 0
      }
    }
  },
  beforeMount(){
    let t = this;
    t.$nextTick( () => {
      t.$el.dropmenu = t.$refs.drop.$el;

      // 计算drop位置
      let slot = t.$refs.slot;


      // scrollTop需要兼容
      let top = slot.getBoundingClientRect().top + document.documentElement.scrollTop + slot.offsetHeight + 5;
      let left = slot.getBoundingClientRect().left + document.documentElement.scrollLeft;

      t.pos = {
        top: top + 'px',
        left: left + 'px',
      }

      let offsetParent = t.$el.offsetParent;

      if(offsetParent !== document.body){
        offsetParent.addEventListener('mousewheel', function(){
          let top = slot.getBoundingClientRect().top + document.documentElement.scrollTop + slot.offsetHeight + 5;
          let left = slot.getBoundingClientRect().left + document.documentElement.scrollLeft;

          t.pos = {
            top: top + 'px',
            left: left + 'px',
          }

          console.log('scroll')
        })
      }
    } )
  },
  components: {
    'drop': Drop
  },
  methods: {
    handleClick(){
      let t = this;

//      // 计算drop位置
//      let slot = t.$refs.slot;
//
//      let top = slot.getBoundingClientRect().top + document.body.scrollTop + slot.offsetHeight + 5;
//      let left = slot.getBoundingClientRect().left + document.body.scrollLeft;
//
//      t.pos = {
//        top: top + 'px',
//        left: left + 'px',
//      }

      t.dropVisible = true;
    },
    hideDrop(){
      let t = this;
      t.dropVisible = false;
    }
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
