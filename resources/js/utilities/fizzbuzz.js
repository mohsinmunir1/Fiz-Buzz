function fizzBuzzNumbers(numbers) {
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

export { fizzBuzzNumbers }
