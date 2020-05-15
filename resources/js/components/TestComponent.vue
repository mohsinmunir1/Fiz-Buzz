<template>
    <div class="md:flex border p-4 text-center">
        <div class="mt-4 md:mt-0 md:ml-6 text-center">
            <h1 class="font-black">FizzBuzz numbers:</h1>
            <span v-for="number in numbers">{{ number }} </span>
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
          .get('/api/numbers/fizzbuzz')
          .then(({data: numbers}) => this.numbers = numbers)
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
