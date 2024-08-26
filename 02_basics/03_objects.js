//singelton 


//object literals
const mySym=Symbol("key1")

const JsUser = {
    name:"amulya",
    age:22,
    mySym:"mykey1",
   "email":"amuda@eg.dk",
    bool: true,
    login:[1,2]

}

console.log(JsUser.name)
console.log(JsUser["name"])
console.log(JsUser["email"])
console.log(JsUser[mySym]) //

JsUser.email="amuda@eg.dk"
//Object.freeze(JsUser)
JsUser.email="amuuuuu@eg.dk" //email wont chnage now since its already frozen

JsUser.greeting = function(){
    console.log("hello")
}

JsUser.greeting = function(){
    console.log("hello",$(this.name))
}

console.log(JsUser.greeting)// undef
console.log(JsUser.greeting())// wont work if freex is used before
console.log(JsUser.greetingtwo())



