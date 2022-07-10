<template>
  <div class="test" id="TestView">
    <input v-model="isWorkedT" placeholder="false/true" />
    <p>Input is {{ val ? 'legal' : 'illegal' }}</p>
    <HelloWorld msg="Hello World!" :isWorked="isWorked"></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'TestView',
  components: {
    HelloWorld
  },
  data () {
    return {
      isWorkedT: 'false'
    }
  },
  computed: {
    val () {
      return this.isWorkedT === 'false' || this.isWorkedT === 'true'
    },
    isWorked () {
      return this.isWorkedT === 'true'
    }
  }
}
</script>
