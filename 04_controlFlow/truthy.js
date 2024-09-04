const uMail = "a@ul.ya"

if(uMail){
    console.log("got the user")
}
else{
    console.log("dont exist")
} // it will assume there is a uMail present and and without the present

//falsy value: false , 0 , -0 , BigInt 0n , "" , null , undef , NaN

//truthy: "0", "false" , " " , [] , { }, function(){ }

let maill 
if( maill.length===0){
    console.log("empty"); // gets printed
    
}


const emptobj = {}
if( Object.keys(emptobj).length===0){
    console.log("empty"); // gets printed
    
}


//Nullish Coalescing Operator (??) : null undef

let val1;
let val2
val1 = 5 ?? 10
val2 = null ?? 10
console.log(val1) // gives 5 ...... it checks safety
console.log(val2) // gives 10..


//ternary operator
// condition ? true : false

const iceteaprice = 100
iceteaprice <=80 ? console.log(" less than 80") : console.log("more than 80") //

