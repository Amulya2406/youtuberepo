//arrays

const myarr = [1,2,3,4,5]
// const myarr2 = ["apple","mango","mango"]
// const myarr3 = new Array(1,2,3,4)

// console.log(myarr[0]) //gives 1

// //methos

// myarr.push(6) // 0 to 6
// myarr.pop() //last elem removed
myarr.unshift(9) // adds 9 to the beginning
console.log(myarr)
myarr.shift()
console.log(myarr)//removes first elem


console.log(myarr.includes(1))
console.log(myarr.indexOf(3))

const newarr = myarr.join() //coverts to string w same op

const myn1 = myarr.slice(1,3)// 1 and 2 but not 3
const myn2 = myarr.splice(1,3)// manipulates og array and permanently removes 1 2 3 

