// If we list all the natural numbers below 10 that are multiples of 3 or 5,
//  we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of
// all the multiples of 3 or 5 below the number passed in.
// Note: If the number is a multiple of both 3 and 5,
// only count it once. Also, if a number is negative,
//  return 0(for languages that do have them)

const solution = (num) => {
  const arr = [...Array(num).keys()]

  let multiplies = []

  arr.map((n) => {
    n % 3 === 0 && n % 5 === 0
      ? multiplies.push(n)
      : n % 3 === 0
      ? multiplies.push(n)
      : n % 5 === 0
      ? multiplies.push(n)
      : ''
  })

  const summarize = multiplies.reduce((a, b) => a + b, 0)
  return summarize
}

console.log(solution(10))
