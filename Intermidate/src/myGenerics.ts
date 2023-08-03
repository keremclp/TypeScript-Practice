const score : Array<number> = []

const names: Array<string> = []

function identityOne(val:boolean | number) : boolean|number{
    return val
} 

function identityTwo(val:any):any{
    return val
}

function identityThree<Type>(val:Type) : Type{
    return val
}

// identityTwo(true) if I passed string,number,boolean or any other types, it will generates for accepted value as the type of that you passed and for the return type as well !!!

function identifyFour<T>(val:T): T{
    return val
}

interface Bootle{
    brand:string,
    type : number,
}

// identifyFour<Bootle>({})

function getSearchProduct<T>(products: T[]): T // this T should one of the array
{
    //do some database operations
    const myIndex=0
    return products[myIndex]
}

const getMoreSearchPoducts = <T,>(products:T[]) : T => {
    //do some database operations
    const myIndex = 2
    return products[myIndex]
} 
// if you use <T,> it mean that it is a Generic 

interface Database{
    connection : string,
    username: string,
    password:string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object{
    return{
        valOne,
        valTwo
    }
}

// anotherFunction(3,{})

interface Quiz{
    name: string,
    type:string
}

interface Course{
    name: string,
    author:string,
    subject:string
}

class Sellable<T>{
    public cart: T[] = []
    addToCart(products: T){
        this.cart.push(products)
    }
} 
// let genericClass = new Sellable<number> olursa number type olmuş oluyor!!