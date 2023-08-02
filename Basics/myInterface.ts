interface User {
    readonly dbId:number
    email:string,
    userID:number,
    googleID?:string
    // startTrail: () => string
    startTrail():string
    getCoupon(couponname:string, value:number):number
}

// You can write interface again 
interface User {
    githubToken:string
}


interface Admin extends User {
    role:"admin" | "ta" | "learner",
}

const kerem : Admin = {dbId:22, email:'kerem', 
userID:222,
role : "admin",
githubToken: '<PASSWORD>',
startTrail: () =>{
    return 'trail started'
},
getCoupon: (name:'keremcan', off:11) => {
    return 100
}
}

kerem.email = 'kerem@gmail.com'
