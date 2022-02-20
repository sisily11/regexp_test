
const str = `
010-2345-6789
thesecon@gmail.com
https//www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

const regexp = /the/g

console.log(str.match(regexp))

console.log(str.match(/https?/g))