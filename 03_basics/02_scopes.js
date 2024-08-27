// LET VAR AND CONST
if ( true){
let a =10;
const b = 20
var c =30
}

//{} determine sthe scope


console.log(a) // doesnt get print because its declared inside the scope
console.log(b) //doesnt get print because its declared inside the scope
console.log(c) // works and doesnt  

//inside { } blaock scope and outside is global scope 



//nested scope

function one(){
    const unamee = "amulya"

    function two(){
        const web = "youtube"
        console.log(unamee)
    }
    //console.log(web) doesnt work

   // two()  //gives hithesh
}

one() // doesnt get anything becuase two doesnt work without calling


if(true){
    const username = "amulya"
    if(username === "amulya"){
        const website = "youtube"
        console.log(username + website)
    }
    //console.log(website)  //gives error
}

//console.log(username) //no

//_______________Interesting_______________

function addone(value){
    return value+1
}

addone(5) // if its moved above the funtion then the hoisting works

const addtwo = function(num){ //expression type 
    return num+2
}
addtwo(5) // meanwhile since its not directly a function so it wont work