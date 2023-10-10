// let num1 = 5;

// function calculate(num1:number,num2:number){
//     return num1+num2;
// }

// console.log(calculate(num1,3));



// function getTotal(numbers:number[]){
//     return numbers.reduce((acc, index)=>{
//         return acc+index
//     },0)
// }

// console.log(getTotal([1,2,3,4]));

// type APP = {
//     name: string,
//     version:number,
//     available:boolean
// }

// let myApp: APP={
//     name:"Job Huntre",
//     version:5,
//     available:true
// }

// console.log(myApp)


// type ID = number;

// function login(id:ID){
//     return id;
// }

// console.log(login(5));


// /Arrays

// let skills: string[] = ["Js", "Typescript"];

// skills.push("React")
// skills.map((skill)=>{
//     console.log(skill.toUpperCase(),"----Skill")
// })


// let lists : (string | number)[] = ["Fruits", 10 , 5 ,"Vegies"];

// lists.map((list)=>{
//     if(typeof list === "string")
//     console.log(list.toUpperCase(),"----list")
// })

// Objects


// let person: {
//     name: string;
//     location: string;
//     isProgrammer: boolean;
//   };

//     person = {
//         name: "John",
//         location: "London",
//         isProgrammer: true,
//     };

    // person={
    //     name:"Priya",
    //     location:"Bangalore",
    // }

// person.isProgrammer = false;
    // console.log(person)


// Interface

// interface Person{
//     name:string,
//     location:string,
//     isProgrammer?:boolean,
//     sayHi:(arg:string)=>string
// }

// let person1: Person={
//     name:"John",
//     location:"London",
//     isProgrammer:false,
//     sayHi:(arg)=>{
//         return arg;
//     }
// }

// console.log(person1.sayHi("Hello"))

// let person2: Person = {
//     name:"Priya",
//     location:"Bangalore",
//     sayHi:(arg)=>{
//         return arg;
//     }
// }

// console.log(person2)

// Functions

// function add(num1:number, num2:number, msg?:string):string{   // ? is used to make the parameter optional
//     console.log(msg)
//     return `Total is ${num1+num2}`
// }

// console.log(add(5,5))


// Void Function

// const logMsg = (msg: string): void => {
//     console.log("Hello " + msg);
//     // return 9;
// }

// logMsg("Priya")


// Function Signature that will return nothing
// let sayHello: (name: string) => void;

// sayHello = (name) => {
//   console.log('Hello ' + name);
// };

// sayHello('Priya');

// Type Aliases

// type StringOrNum = string | number;

// let empID: StringOrNum;

// empID = 123;
// empID = 'E123';

// type person = {
//     name: string;
//     age: number;
//     id: StringOrNum;
// }

// const person1:person = {
//     name: 'John',
//     age: 30,
//     id: 123
// }

// const person2:person = {
//     name: 'Peter',
//     age: 20,
//     id: 'E123',
// }

// DOM and Type Casting

// const heading = document.querySelector('h1');
// console.log(heading.innerText) 
// ERROR: Object is possibly 'null'. TypeScript can't be sure the h1 tag exists, as it can't access the DOM


// non-null assertion operator (!) to tell TypeScript that the value will never be null or undefined
// When Compilar cannot infer the type but we have more knowledge about the type than the compiler, we can use type casting
// const heading = document.querySelector('h1') !;
// console.log(heading.innerText) 

// const form = document.getElementById("form") as HTMLFormElement;
// console.log(form.method);

