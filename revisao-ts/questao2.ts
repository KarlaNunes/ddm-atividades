type numbersType = number[]

function evenNumbers(numbers: numbersType) {

    const evenNumbers = numbers.filter((number) => number % 2 === 0)

    return evenNumbers
}