//Immediate invoked function expression

//to make the function run immediately

(function chai(){
    console.log((`DB Connected`));
    
})(); //give a ; to stop orelse the next ifee will not get displayed

(function chai(){
    console.log((`DB Connected`));
    
})()
// to prevent the pollution of global scope 

//CAN ALSO BE WRITTEN IN arow function
//*****IMP: when you have two IFEE youve to end the first ofee using a ";" as it doesnt know where to stop */