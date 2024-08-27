// const tinderuser = new objects()

const tinderuser = {}

tinderuser.id="123abc"
tinderuser.name="amulya"
tinderuser.loggedin= false

//console.log(tinderuser) // basic display

const reg = {
    email : "amam@ksj",
    name : {
        username :{
             fname:"amu",
             lname: "lya"
        }
       
    }
}
console.log(reg.name) // gives full name
console.log(reg.name.username.fname) // just amu


// combine objects
const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"c", 2:"d"}
//const obj3 = {obj1,obj2}  //works
//const obj3 = Object.assign({},obj1,obj2)// {} not compulsory but good practice
// same can be done using
const obj3={...obj1,...obj2}

console.log(obj3)


const user = [
    {
        email1:"abc@kosd.cd",
        age : 22
    },
    {
        email1:"abc@kosd.cd",
        age : 22
    } ,
     {
        email1:"abc@kosd.cd",
        age : 22
    } ,
     {
        email1:"abc@kosd.cd",
        age : 22
    }
]

user[1].email1
//VERY IMP
// to get just keys and values
console.log(tinderuser)
console.log(Object.keys(tinderuser))// gives keys
console.log(Object.values(tinderuser))// gives values
console.log(Object.entries(tinderuser))// gives keys and values inside []
console.log(tinderuser.hasOwnProperty('email'))

 

const course = {
     cname: "js",
     price:  "999",
     Cinstructot: "amulya"
}

const {Cinstructot} = course // extract the value

//json = javascript object notation
// {
//     name:"amulya",
//     cname : "JS",
//     price : 0;
// }
