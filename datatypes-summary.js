//primitive :call by value
// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

//reference 
//Array, objects, functions
/*
const id= Symbol('123')
const id2= Symbol('123')

console.log(id === id2)


const fruit =["mango","orange","apple"]
let myobj ={
    name: "amu",
    age : 22,
}

const myFn= function(){
    console.log("hello world");
}

console.log(typeof bigNumber)

*/

//**************************************************************** 
//stack (premitive), Heap(non-premitive)

let myYTname ="amulyahaha"
let name2 = myYTname
name2 ="chaiAurCode"

console.log(myYTname)
console.log(name2)
//doesnt change both values


let userOne = {
    email: "amu@g.com",
    id: 123,
}

let u2=userOne
u2.email="adi@g.com"

console.log(userOne.email)
console.log(u2.email)

// changes both values as its a referrence