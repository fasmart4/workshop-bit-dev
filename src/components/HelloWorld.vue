<template>
  <div>
    <h1>{{ helloMessage }}</h1>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  setup () {
    const helloMessage = ref('Hello na ja eiei')

    return {
      helloMessage
    }
  }
}
</script>