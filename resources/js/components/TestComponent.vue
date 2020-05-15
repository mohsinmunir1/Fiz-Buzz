<template>
    <div class="md:flex container border p-4 text-center">
        <div class="mt-4 md:mt-0 md:ml-6 text-center">
            <button @click="regenerate()" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Regenerate
            </button>
        </div>
        <div class="mt-4 md:mt-0 md:ml-6 text-center">
            <b>Random numbers:</b> <span v-for="number in numbers">{{ number }} </span>
        </div>
    </div>
</template>

<script>
  export default {
    name: "TestComponent.vue",
    data () {
      return {
        numbers: []
      }
    },
    methods: {
      regenerate() {
        axios
          .get('/api/numbers')
          .then(({data: numbers}) => this.numbers = this.withFuzzBuzz(numbers))
      },
      withFuzzBuzz(numbers) {
        return numbers.map(x => {
          let prefix = ''
          if (x % 3 === 0) {
            prefix += 'Fizz'
          }
          if (x % 5 === 0) {
            prefix += 'Buzz'
          }
          return prefix ? prefix : x
        })
      }
    },
    created() {
      this.regenerate()
    }
  }
</script>

<style scoped>

</style>
