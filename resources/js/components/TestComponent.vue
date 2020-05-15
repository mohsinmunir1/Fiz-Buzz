<template>
<div>dello</div>
</template>

<script>
  export default {
    name: "TestComponent.vue",
    created() {
      axios
        .get('/api/random')
        .then(response => (this.info = response))

    }
  }
</script>

<style scoped>

</style>
