const promiseONe = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseONe.then(function(){
    console.log("promise consumed");
    
})

//type 2

const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task 2is complete');
        resolve()
    },2000)
}).then(function(){
    console.log("promise 2 consumed");
    
})