<template>
  <div class="test" id="TestView">
    <input v-model="isWorkedT" placeholder="false/true" />
    <p>Input is {{ val ? 'legal' : 'illegal' }}</p>
    <HelloWorld msg="Hello World!" :isWorked="isWorked"></HelloWorld>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import HelloWorld from '@/components/HelloWorld.vue'

@Options({
  components: {
    HelloWorld
  }
})
export default class Test extends Vue {
  isWorkedT = 'false'
  get val () {
    return this.isWorkedT === 'false' || this.isWorkedT === 'true'
  }

  get isWorked () {
    return this.isWorkedT === 'true'
  }
}
</script>
