"use strict";
// class User {
//     public email:string;
//     private name:string;
//     readonly city: string="New York";
//     constructor(email:string, name:string, ){
//         this.email = email;
//         this.name = name;
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1; // it will access in the this class and wherever any class inherit this class 
        this.city = "New York";
    }
    deleteToken() {
        console.log('Token deleted');
    }
    get getAppleEmail() {
        return `Apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(value) {
        if (value <= 1) {
            throw new Error('course count must be more than one!');
        }
        this._courseCount = value;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFammily = true;
    }
    changeCourseCount() {
        this._courseCount = 2;
    }
}
const kerem = new User("kerem@gmail.com", "kerem");
// kerem.city you can acces them but if it is private, you do not have the access for the city attribute
kerem.courseCount;
