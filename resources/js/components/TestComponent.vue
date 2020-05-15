<template>
    <div class="md:flex border p-4 text-center">
        <div class="mt-4 md:mt-0 md:ml-6 text-center">
            <h1 class="font-black">FizzBuzz numbers:</h1>
            <span v-for="number in numbers">{{ number }} </span>
        </div>
    </div>
</template>

<script>
  import Api from '../utilities/Api'
  import { fizzBuzzNumbers } from "../utilities/fizzbuzz";

  export default {
    name: "TestComponent.vue",
    data () {
      return {
        numbers: []
      }
    },
    methods: {
      async regenerate() {
        this.numbers = await Api.fizzbuzzNumbers();
      },
      withFuzzBuzz(numbers) {
        return fizzBuzzNumbers(numbers)
      }
    },
    created() {
      this.regenerate()
    }
  }
</script>

<style scoped>

</style>
