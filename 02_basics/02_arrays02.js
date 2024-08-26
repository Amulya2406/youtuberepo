const fruit = ["mango","apple","banana"]
const veg = ["tamato","potato","brinjal"]

const food=fruit.concat(veg)// merge 2

const allfood=[...fruit,...veg] //does the conacatenation AND can add mutiple arrays using ...

const arr2 = [1,2,3,[4,5,6],7,[6,7,[8,9]]]

const flatarr = arr2.flat(Infinity)//or give any numer as depth
// spreads out the  whole array in layers


console.log(Array.isArray("amulya"))// gives false as its not array
console.log(Array.from("amulya"))//converts to an array
console.log(Array.from({name:"amulya"}))

let a=1;
let b=2;
let c=3;

console.log(Array.of(a,b,c))// gives as an array
