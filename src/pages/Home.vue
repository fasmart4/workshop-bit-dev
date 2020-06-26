<template>
    <div>
        <h1>{{ title }}</h1>
    </div>
</template>
<script>
import { ref } from 'vue'

export default {
    name: 'Home',
    setup () {
        const title = ref('Home')

        return { title }
    }
}
</script>