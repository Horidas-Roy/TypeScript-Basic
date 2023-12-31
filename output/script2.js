"use strict";
// const myFunc=()=>{
//     console.log("Hello World")
// }
// myFunc()
// let myFunc : Function
// myFunc=()=>{
//     console.log("Hello TypeScript")
// }
// myFunc()
let myFunc = (a, b, c, d = 'milon') => {
    console.log(`Hello ${a} ${b}`);
    console.log(c, d);
};
myFunc('Horidas', '32');
const userDetails = (id, user) => {
    console.log(`user id is ${id} user name is ${user.name} and user age ${user.age}`);
};
const sayHello = (user) => {
    console.log(`Hello ${user.age > 50 ? "Sir" : 'Mr'} ${user.name}`);
};
// Function signature
let myFunction;
let add;
add = (a, b) => {
    console.log(a + b);
    return a + b;
};
let calculation;
calculation = (a, b, c) => {
    if (c === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
console.log(calculation(6, 7, 'm'));
let userDetail;
userDetail = (id, userInfo) => {
};
//interface
//Generics
// const addId=<T>(obj : T )=>{
//    const id=Math.floor(Math.random()*100)
//    return {...obj,id}
// }
// let user=addId({
//     name:'Masrafi',
//     age:40, 
//     country:"Bangladesh"
// })
// user.
const addIds = (obj) => {
    const id = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { id });
};
let user = addIds({
    name: 'Masrafi',
    age: 40,
    country: "Bangladesh"
});
console.log(user.country);
// Generics
// interface APIResponse<T>{
//     status:number,
//     type:string,
//     data:T
// }
// const response1:APIResponse<string>={
//     status:200,
//     type:'good',
//     data:'test'
// }
// Enum
var RType;
(function (RType) {
    RType[RType["SUCCESS"] = 0] = "SUCCESS";
    RType[RType["FAILURE"] = 1] = "FAILURE";
    RType[RType["UNAUTHENTICATED"] = 2] = "UNAUTHENTICATED";
    RType[RType["FORBIDDEN"] = 3] = "FORBIDDEN";
})(RType || (RType = {}));
const response1 = {
    status: 200,
    type: RType.FORBIDDEN,
    data: 'test'
};
console.log(response1);
// Tuples
let l = [3, 'hello', { p: 3 }];
let m = [5, "Hello", { k: 1 }];
// m[0]='e' return an error
