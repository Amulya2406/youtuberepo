//for of

// ["","",""]
// [{},{},{}]


//loops for array
for (const num of arr){
    console.log(num);
    }

    const greetings = "hello world"

    for( const greet of greetings){
        console.log(`each char is ${greet}`)
    }

    //map

    const map = new map()
    map.set('IN',"India")
    map.set('FR',"France") 
    console.log(map) // no copies

    for (const[key , value] of map){
        console.log(key, value);
        
    }

    const myObject = {
        "game1": NFS,
        "game2": NFSs
    }
    
    for (const[key , value] of myObject){
        console.log(key, value);
        
    }// cannot be iterable