<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p v-if="isWorked">It worked!</p>
    <p v-if="!isWorked">It not worked......</p>
    <p>random number = {{ rand }}</p>
    <input
      type="button"
      v-on:click="stopRand"
      value="Click Here to Get Your Lucky Number"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'HelloWorld',
  props: {
    msg: String,
    isWorked: Boolean
  }
})
export default class HelloWorld extends Vue {
  msg = ''
  isWorked = false
  rand = 0
  randObj: null | number = null
  setRand () {
    this.rand = Math.floor(Math.random() * (100 + 1))
  }

  stopRand () {
    if (this.randObj !== null) {
      clearInterval(this.randObj)
      this.randObj = null
    }
  }

  mounted () {
    this.randObj = setInterval(() => {
      this.setRand()
    }, 500)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
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
</style>
