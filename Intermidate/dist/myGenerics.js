"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
function identityThree(val) {
    return val;
}
// identityTwo(true) if I passed string,number,boolean or any other types, it will generates for accepted value as the type of that you passed and for the return type as well !!!
function identifyFour(val) {
    return val;
}
// identifyFour<Bootle>({})
function getSearchProduct(products) {
    //do some database operations
    const myIndex = 0;
    return products[myIndex];
}
const getMoreSearchPoducts = (products) => {
    //do some database operations
    const myIndex = 2;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(products) {
        this.cart.push(products);
    }
}
// let genericClass = new Sellable<number> olursa number type olmuş oluyor!!
