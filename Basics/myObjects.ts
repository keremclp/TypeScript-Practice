// const User = {
//     name: 'John',
//     email : 'kerem@gmail.com',
//     isActive : true
// }

// function createUser({ name: string , isPaid: boolean }){}

// let newUser = {name: "kerem", isPaid: false, email:'kerem@gmail.com' }

// createUser(newUser);
// // createUser({name: "kerem", isPaid: false }); buna email eklemek istersek ne oluyor ?


// function createCourse():{ name: string , price: number }{
//     return {
//         name: "TypeScript",
//         price: 2
//     }
// } 
// change something on the parameters and you can see the change

// type User = {
//     name: string;
//     email: string;
//     isActive: boolean;
// }



// function createUser(user: User): User{
//     return {name: "" , email:"", isActive:true };

// } if you want to return sth, you have to add the second user in here : (user: User)<: User>

// createUser({name: "" , email:"", isActive:true })

type User = {
    readonly _id :string;
    name: string;
    email: string;
    isActive: boolean;
    credcardDetails? :number; // ? make it is optional
}

let myUser: User = {
    _id: "1",
    name: "John",
    email: "kerem@gmail.com",
    isActive: true,
    credcardDetails :3
}

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number;
}
 




myUser.name = "Kerem";
// myUser._id = 1  it cannot be done because _id is readonly
export {}