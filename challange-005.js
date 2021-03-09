// const arrayDiff = (a, b) => {
//   for (const bn of b) {
//     a = a.filter((an) => an !== bn)
//   }
//   return a
// }

// BEST COMMUNITY SOLUTION
const arrayDiff = (a, b) => {
  return a.filter((an) => !b.includes(an))
}

console.log(arrayDiff([1, 2, 2, 2, 3], [2, 3]))
