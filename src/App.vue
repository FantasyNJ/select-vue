<template>
  <div id="app">
    <div class="haha">
      <div class="xixi">
        <HelloWorld>
          <input type="text" slot="fire-lenovo">
        </HelloWorld>
      </div>
    </div>
    <HelloWorld>
      <input type="text" slot="fire-lenovo">
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from './components/lenovo/HelloWorld'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  margin: 0;
  padding: 0;
}

  body{
    height: 2000px;
  }

  .haha{
    position: absolute;
    top: 500px;
    left: 100px;
    width: 300px;
    height: 300px;
    background: red;
    overflow: auto;
  }

  .xixi{
    height: 350px;
  }

  .wrap{
    padding-top: 200px;
  }
</style>
