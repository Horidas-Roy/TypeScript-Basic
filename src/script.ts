const country="I love very much Bangladesh"
// console.log(country)

let playerName="Mashrafi"
// playerName=34 Error because string type
let age=34
// console.log(playerName)

age=56

// console.log(playerName)
// console.log(age)


let player;
player="Masrafi"
player=34 //No error because player is undefined.hence compilar cant understand what type of player

const multiply=(a:number,b:number)=>{  //explicit type
   return a*b
}

// console.log(multiply("name",4))  return an error
// console.log(multiply(3,4))

// array

const fruits= ["mango", 'apple']

fruits.push("banana")
// fruits.push(34) //return an error

console.log(fruits)

const arr=[]
arr.push("horidas")
arr.push(34) //return no error because undefined arr
console.log(arr)

let mixed=["mango",34,true,{}]
mixed.push('str')
mixed.push(56)
mixed.push(false)
mixed.push({})

console.log(mixed)

// object

let person={
    name:"Masrafi",
    age:35,
    IsCaptain:true
}

// person.name=34 //return an error because of type
person.name="sakib"
console.log(person)

// person.country ="Bangladesh" //return an because of schema


//Explicit Type

let a : string
let b : number

// a=4//return an error
a="horidas"
b=34
// b="34" //return an error

// normal variable

let f: number|string;
f=34
f="str"

// array
let c : string[] = []
let d : number[] = []
let e : (string | number)[] = []

c.push("3")
// c.push(6) //return an array

// object

let g:object
// g='str' //return an error
g={
    //take any type object
}

let h:{
    name: string,
    age:number,
    adult:boolean
}

h={
    name:'horidas',
    // age:'45',
    age:45,
    adult:true
}

let i : any
i=6
i='horidas'

let j:any[]=[]
j.push(43)
j.push("str")

let k:{
    Name:any,
    Age:any
}
