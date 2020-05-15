<template>
    <div class="md:flex container border p-4">
        <div class="mt-4 md:mt-0 md:ml-6">
            <div class="uppercase tracking-wide text-sm">Tailwind</div>
        </div>
    </div>
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
