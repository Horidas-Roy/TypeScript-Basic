// const myFunc=()=>{
//     console.log("Hello World")
// }
// myFunc()

// let myFunc : Function
// myFunc=()=>{
//     console.log("Hello TypeScript")
// }
// myFunc()

let myFunc=(a:string,b:string, c?:string, d:string='milon')=>{ //optional & default
    console.log(`Hello ${a} ${b}`)
    console.log(c,d)
}
myFunc('Horidas','32')

// alias

type strOrNum=string | number
type userType={name:string ,age:number}

const userDetails=(id:strOrNum,user:userType)=>{
  console.log(`user id is ${id} user name is ${user.name} and user age ${user.age}`)
}

const sayHello=(user:userType)=>{
   console.log(`Hello ${user.age>50 ? "Sir" : 'Mr'} ${user.name}`)
}

// Function signature

let myFunction: (x:string,y:string)=> void

let add:(x:number,b:number)=>number

add=(a:number,b:number)=>{
    console.log(a+b)
    return a+b
}

let calculation: (x:number,y:number,z:string) => number

calculation=(a:number,b:number,c:string)=>{
   if(c==="add"){
    return a+b
   }else{
    return a-b
   }
}
console.log(calculation(6,7,'m'))

let userDetail: (id: string | number, userInfo:{
    name:string,
    age:number
})=>void

userDetail=(id: number | string,userInfo:{
    name:string,
    age:number //you cant change object key
})=>{
  
}

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


const addIds = <T extends {
    // object
    name:string,
    age:number
 }> (obj : T )=>{
    const id=Math.floor(Math.random()*100)
    return {...obj,id}
 }

let user=addIds({
    name:'Masrafi',
    age:40, 
    country:"Bangladesh"
})

console.log(user.country)


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

  enum RType {'SUCCESS','FAILURE','UNAUTHENTICATED','FORBIDDEN'}

  interface APIResponse<T>{
    status:number,
    type:RType,
    data:T
}

const response1:APIResponse<string>={
    status:200,
    type:RType.FORBIDDEN,
    data:'test'
}

console.log(response1)

// Tuples
let l=[3,'hello',{p:3}]
let m:[number,string,object]=[5,"Hello",{k:1}]
// m[0]='e' return an error