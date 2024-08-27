//function: any number of code that is like apack and can be used and carried anywhere

function myname (){
    console.log("a")
console.log("m")
console.log("u")
console.log("l")
console.log("y")
console.log("aa")
}

//execution

// myname() // runs
// myname // is just the reference

function addtwonum(num1,num2){
    
    console.log(num1+num2)
}
addtwonum(3,4)//7
addtwonum(3,"a")//3a

//const result = addtwonum(3,4)// gives undefined as result is not returned by the func


function addtwonum(num1,num2){
    let result = num1 + num2
    return result;
}

const result = addtwonum(3,4) // now it works fine when printed

function loginuser(username){
   
    return `${username} just logged in`;
}

console.log(loginuser("amulya"))


//imagine a shopping kart with no idea on number of elems

function calcCartPrice(...num1){ // all the conten will be returned
    return num1
}
console.log(calcCartPrice(200,400,600))






const userr = {
    namee:"amulya",
    age : 22
}
 
function handleobj (anyObj){ // generally said anyobj
    console.log(`uname is ${anyObj.namee} and price is ${anyObj.age}`)
}

handleobj(userr)