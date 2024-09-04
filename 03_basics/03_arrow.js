const user = {
    uname : "amulya",
    price : 999,

    welcomeMsg : function(){
         console.log(`${this.uname}, welcome to website`)
         console.log(this) //gives all data
    }
}

user.welcomeMsg()//works

//chnage it using

user.uname ="amu"
user.welcomeMsg() //updates value 

console.log(this) // empty

// function chai(){
//     console.log(this) //will get too many general
// }

// function chai(){
//     let uname = "amuu"
//     console.log(this.uname) //undef , not possible
// }                             
// chai()


// const fn =function (){
//     let uname = "amuu"
//     console.log(this.uname) //undef
// } 

// const chai = function(){
//     let uname = "amuu"
//     console.log(this.uname) //undef 
// }                             

chai()

const chai = () =>{
    let uname = "amuu"
    console.log(this) //undef 
} 



//ARROW FN
const addtwo = (n1,n2) => {
    return n1+n2
}
console.log(addtwo(3,4))


//without using {}
const addtwoo = (n1,n2) => (n1+n2)

const myArray = [2,5,3,7,8]
myArray.forEach()

const addtwooo = (n1,n2) => ({uname : "amulya"})



