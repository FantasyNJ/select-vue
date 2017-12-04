<template>
  <div
    class="dropdown"
    :style="pos"
  >
    <ul>
      <li>000001</li>
      <li>000002</li>
      <li>000003</li>
      <li>000004</li>
      <li>000005</li>
      <li>000006</li>
      <li>000007</li>
      <li>000008</li>
      <li>000009</li>
      <li>000010</li>
      <li>000011</li>
      <li>000012</li>
      <li>000013</li>
      <li>000014</li>
      <li>000015</li>
      <li>000016</li>
      <li>000017</li>
      <li>000018</li>
      <li>000019</li>
      <li>000020</li>
      <li>000021</li>
      <li>000022</li>
      <li>000023</li>
      <li>000024</li>
      <li>000025</li>
      <li>000026</li>
      <li>000027</li>
      <li>000028</li>
      <li>000029</li>
      <li>000030</li>
      <li>000031</li>
      <li>000032</li>
      <li>000033</li>
      <li>000034</li>
      <li>000035</li>
      <li>000036</li>
      <li>000037</li>
      <li>000038</li>
      <li>000039</li>
      <li>000040</li>
      <li>000041</li>
      <li>000042</li>
      <li>000043</li>
      <li>000044</li>
      <li>000045</li>
      <li>000046</li>
      <li>000047</li>
      <li>000048</li>
      <li>000049</li>
      <li>000050</li>
      <li>000051</li>
      <li>000052</li>
      <li>000053</li>
      <li>000054</li>
      <li>000055</li>
      <li>000056</li>
      <li>000057</li>
      <li>000058</li>
      <li>000059</li>
      <li>000060</li>
      <li>000061</li>
      <li>000062</li>
      <li>000063</li>
      <li>000064</li>
      <li>000065</li>
      <li>000066</li>
      <li>000067</li>
      <li>000068</li>
      <li>000069</li>
      <li>000070</li>
      <li>000071</li>
      <li>000072</li>
      <li>000073</li>
      <li>000074</li>
      <li>000075</li>
      <li>000076</li>
      <li>000077</li>
      <li>000078</li>
      <li>000079</li>
      <li>000080</li>
      <li>000081</li>
      <li>000082</li>
      <li>000083</li>
      <li>000084</li>
      <li>000085</li>
      <li>000086</li>
      <li>000087</li>
      <li>000088</li>
      <li>000089</li>
      <li>000090</li>
      <li>000091</li>
      <li>000092</li>
      <li>000093</li>
      <li>000094</li>
      <li>000095</li>
      <li>000096</li>
      <li>000097</li>
      <li>000098</li>
      <li>000099</li>
      <li>000100</li>
    </ul>
  </div>
</template>

<script>

  import { getStyle } from './src/common'

  export default {
    name: 'drop',
    props: [
      'pos'
    ],
    beforeMount() {
      const t = this;

      t.$nextTick(() => {
        let elem = t.$el;

        // 插入到body中
        document.body.appendChild(elem);

        t.resetTransformOrigin();
      })
    },
    methods: {
      resetTransformOrigin() {
        const t = this;
        let origin = 'top';

        t.$el.style.transformOrigin = `center ${ origin } 0`;
      },
    }
  }
</script>

<style lang="scss">
  .dropdown {
    position: absolute;
    width: 100px;
    max-height: 200px;
    overflow: auto;
    background: yellow;
    z-index: 9999;
  }
</style>
