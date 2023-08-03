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
    protected _courseCount = 1 // it will access in the this class and wherever any class inherit this class 
    readonly city: string="New York";

    constructor(
        public email:string,
        public name:string, 
        // private userID: string,
        ){
    }
    private deleteToken(){
        console.log('Token deleted')
    }
    get getAppleEmail():string{
        return `Apple${this.email}`;
    }
    get courseCount():number{
        return this._courseCount
    }
    set courseCount(value:number){
        if (value <=1) {
            throw new Error('course count must be more than one!')
        }
        this._courseCount =value

    }
    // There is no return type, this is how TS design
}

class SubUser extends User{
    isFammily:boolean = true
    changeCourseCount(){
        this._courseCount = 2
    }
}

const kerem = new User("kerem@gmail.com", "kerem")
// kerem.city you can acces them but if it is private, you do not have the access for the city attribute

kerem.courseCount