// const user: (string | number)[] = [1,'hc']
let tUser: [string,number,boolean]

// tUser = [23,'ker',false] / it has to be in a order
tUser = ['kerem', 23, true]

let rgb : [number, number, number ] = [22,11,33]

type User = [number,string]
const newUser : User = [11,'kerem@gmail.com'] // you can not add true!!

newUser[1] = '1' // you can change like that
// newUser.push(true)

export {}