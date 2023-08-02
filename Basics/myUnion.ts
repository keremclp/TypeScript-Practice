let score:number | string  = 33


score = 44
score = '55'

type User = {
    name: string,
    id : number
}

type Admin = {
    username: string,
    id : number
}

let kerem : User | Admin = {name: 'kerem',id: 1}
// if you remove ithe Admin part, it will not compiler for username!

kerem = {username: 'kerem',id: 1}

// function getDbId(id:number|string){
//     // making some API calls
//     console.log(`Db id is ${id}`)
// }

getDbId(33)
getDbId('3')

function getDbId(id:number |string){
    // making some API calls
    if(typeof id === 'string'){
        id.toLowerCase()
    }
    console.log(`Db id is ${id}`)
}

// array 
const data : number[] = [1,2,3,]
const data2: string[] =["2","3"]
const data3 : string[] | number[] = ["1","2","33"] // it can be either string and number as well, but still not allowwed for mix 
// const data3 : (string | number | boolean) = ["1","2","33"] 

let seatAllotment : "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment ="seat"  / it is not allowed