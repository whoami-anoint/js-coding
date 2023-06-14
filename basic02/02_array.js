const marval_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marval_heros.push(dc_heros)

// console.log(marval_heros);

// Output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHeros = marval_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros = [...marval_heros,...dc_heros]
// console.log(all_new_heros);

// ... is most preferable way to concat two arrays

// const another_array = [1,2,3,[4,5,6],7,[6,7],[4,5]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray(marval_heros));
// console.log(Array.from("Abishek")); // Split strings and make array

console.log(Array.from({name:"Hitesh"})); // Interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));