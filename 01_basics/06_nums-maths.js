const score=6;
const balance = new Number(100);

console.log(score)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2))

const othernum = 23.99689
console.log(othernum.toPrecision(2))
console.log(othernum.toPrecision(5))

const othernum2 = 2399689
console.log(othernum2.toLocaleString())
console.log(othernum2.toLocaleString('en-IN'))


//++++++++++++maths+++++++++++//

console.log(Math);
console.log(Math.abs(-4)) //positive value only
console.log(Math.round(4.6))
console.log(Math.ceil(4.6))
console.log(Math.floor(4.6))
console.log(Math.max(1,2,3))
console.log(Math.min(1,2,3))

console.log(Math.random()) //value btwn 0 and 1
console.log(Math.random()*10+1)

const min=10;
const max =20;
console.log(Math.floor(Math.random()*(max-min+1))+min)



