"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
function signUpUser(name, email, isPaid) {
    //...
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
addTwo(5);
getUpper("hello");
signUpUser("kerem", "kerem@gmail.com", false);
loginUser("kerem", "kerem@gmail.com");
// num.toUpperCase izin veriliyor.
// addTwo("5") izin veriliyor.
