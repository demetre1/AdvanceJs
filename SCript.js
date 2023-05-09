
var b = "Can i access this?"//this b can be accesseble by bb function 

function bb(){
  
  var a = "hello";
  
  console.log(b);
}

function bbb(){
  
  var a = "hello";
  b = "hello"//this b can be accesseble by bb function 
  console.log(b);
}
var fun = 5 
function funFunciton(){
  var fun = "helloooo";
  console.log(1,fun);
}

function funnerFunction(){
  var fun = "Byeee";
  console.log(2,fun);
}
function funestFunction(){
  fun ="AHHHHHH"
  console.log(3,fun);
}
console.log("window",fun)
funFunciton();
funnerFunction();
funestFunction();

 //Turnery Opereiton 

// condition ? exper1 : exper2 this is syntax it says 
// if condetion is true evaluet exper1 if false exper2
//for example 

function isUserValid(bool){
  return bool;
}
var answer = isUserValid(true) ? "you may Enter" : "Access denied";

var automatedAnswer = "Your Account # is " +(isUserValid(true)? "1234" :"not valid account");


//Switch Operation

function moveCommand(direction){
  var whatHappend
  switch (direction) {
    case "forward":
      whatHappend = "you encounterd a monster";
      break;
    case "back":
      whatHappend = "you arrived home";
      break;
    case "right":
      whatHappend = "you found a river";
      break;
    case "left":
      whatHappend = "you run into a troll";
      break;  
    default:
      whatHappend = "please enter a valid direction";
      break;
  }
  return whatHappend;
}

                                          // ES5 and ES6
// Let and Const 
// Destructuring
const player1 = "bob";
let experience2 = 100;
let wizardlevel3 = false;

if(experience > 90){
  let wizardlevel = true;
  console.log("inside",wizardlevel);
}
console.log("outside",wizardlevel);
// if we run this and chack wizard level this will output false 
// if both of them were variables it would have been true with variable we make 
// scope insode a function but with let we create withardlevel varialbe in if 
// and access it only in if stament now everytime ower let is wraped around {} < this
// it creats new scope
// const is you cant reassang a variable 

const aaa = function(){
 console.log("a")
}
// with this kind of assintment we would be able to make a function 
// thats constants and we cant change it 
const obj3 = { player:'boby',experience :100, wizardlevel :false,}
// the downside in using const with objects is that we can change propertis of that objects
// its just we cant reassing a variable
// const player2 = obj3.player
// const  experince = obj3.experience;
// let wizardlevel1 = obj3.wizardlevel;

const {player, experience} = obj3;
let{wizardlevel}  = obj3// this is called Destructuring
const names = "john snow";
const obj6 = { [names]: "hello",['ray'+'smith']:"hihi" };



const aa = 1;
const b = 2
const cc  = 4
// if we want to assing a propertis to a object 
// and we dont want to change the names of the propertes 
// we can just write the properties without assingment
const obj12 = {aa ,b ,cc};// <- like this
const name = "Sally";
const age = 34;
const pet = "horse";

// const greetingBest = `hello ${name} you seem to be ${age - 10}. what a lovely pet you have`;

function greet(name ='',age=30,pet='cat'){
  return `hello ${name} you seem to be ${age - 10}. what a lovely ${pet} you have`;
} // < with this we can make default properties for a fucntion

// Sybmol this is not used often but its special becous 
//
var sym1 = Symbol();
var sym2 = Symbol('foo');
var sym3 = Symbol('foo');
//whats so speclia about symbols its unik becous the might be same 
// have same numbers same strings they wont be same and they will never colide
// and symbol is the type in JavaScript


// arrow functions 


function add(a,b){
  return a *b;
};
const add = (a,b) => a*b;

const add1 = (a,b) =>{
  return a * b;
}



                                      //Advance Functions
const frist = () => {
  const greet = "h1"
  const second = () =>{
    alert(greet);
  }
  return second
}

const newFunc = first();
newFunc();

//Cloures - a function run . the function executed, it's never going execute again 
// BUT its going to remember that there are references to those variables
// so the child scope always gas access to parent scope.


// Currying - converting a function that takes moutile functions into taking them
// one by another A.K.A one by one


const mutiplay = (a,b) => a*b;
const curriedMutiplay = (a) =>(b) => a * b; // <-- Currying

//Compose the acte of puting two function together to form a thired function 
//where output of one function is intput of another

const compose = (f,g) => (a) =>  f(g(a));

const sum = (num) => num + 1;

compose(sum,sum)(5);

//We Need To Avoiding side Effects And functional purity



                                          // Advane Arrays
const array = [1,2,10,16];

const double = []
const newArray = array.forEach(num =>{
  double.push(num *2);
})
console.log('forEach',double); //forEach just ittereats to 1,2,10,16 and applays opperation that we tell to that element


// Methods => map,Filter,reduce

 const mapArray = array.map(num => num * 2)// simple operation can be made like this
 console.log('map',mapArray);//map has restriction it expect operation to return element
 const maparray = array.map((num) =>{
  return num *2
 })

//Filter
 const filterArray = array.filter(num => num > 5);
 console.log('filter', filterArray);
 //this to have same output its just if u have one argument you can do it easy way like at the top 
 // ad if u have more then one argument you should do it like below and add argument next to the brases ()-this 
 // like (num,num2,num3) => {}
 const filterarray = array.fliter((num) =>{
  return num > 5
 })
 // reduce 
// we can do filtering and maping in reduse at a same time
// acc stand for accumulator
//accumulator is somthing where we store infomration that happends
// in the body of the function
// accumulator basicly is remembering added number and we can 
// defy accumulator after a function so basicly 
 const reduceArray = array.reduce((acc,num)=>{
    return acc + num;
 },0)// => this 0 is accumulator. it means accumulator will be 0 and after it gose
 // throught the array it will remember added number basicly if acc = 0 and num = 1
 //( 0 + 1 = 1 acc = 1) .(then if next number in array A.K.A num = 2)  (acc + num = 3) acc = 3,
 // and ETC it will do if untill we get to then end of the array

                                          //Advance Objects

 // reference type 
var object1 ={ value: 10};
var object2 = object1;
var object3 = { value: 10};


 // context vs scope
 // "this" is context and it means a object where u are in if you are in window object this means window
 // and widnow.alert is same as this.alert becouse you are in a window object. 
 function b(){
  let a = 4;
 }
 const object4 = {
  a:function(){
    console.log(this);
  }
 }



 // instantiation
 // make a copy of object and reuse a code
 class Player {
  constructor(name, type){
    console.log(this);
    this.name = name;
    this.type = type;
   
  }
  introduce(){
    console.log(`HI I am  ${this.name}  I'am a  ${this.type} ${nan()}` );
  }
}
class Wizard extends Player{
  constructor(name, type){
    super(name,type)
    console.log('wizard',this.name);
  }
  play(){
    console.log(`WEEE I'm a ${this.type}`);
  }
}


const wizard1 = new Wizard('Shelly','Healer');
const wizard2 = new Wizard('Shawn','Darks Magic');

// past by reference vs past by value
var a = 5;
var b = a;

b++;

console.log(a);
console.log(b);


let obj1 = {name:"Yao", password:'123'};
let obj2 = obj1;

obj2.password = "easypeasy";

console.log(obj1);
console.log(obj2);

var c =[1,2,3,4,5];
var d = [].concat(c);

d.push(182131251);
console.log(d);

let obj = {a:'a',
           b:'b',
           c:{deep: 'try and copy me '}};

let clone = Object.assign({},obj)
let clone2 = {...obj}
//deep cloning by JSON

let superClone = JSON.parse(JSON.stringify(obj))

obj.c = 5;
console.log(clone);
console.log(clone2);
console.log(superClone);

//Type Coercion

if (1){
  console.log(5);
}
//  -0 === +0 this will print true but
// if we compeare with function Object.is(-0,+0) this will return false
// and corecion is when javascript tires to transform your input on hes acord
// for exmple if we write if(1){console.log(5)} the one if if stament will be readed
// as true and this will print 5 aslo 0 viwed as false  and this happend with if and == statments
// and it makes you code a mess so if we want to avoid thss kind of things need to use === this triple equals
 

                                                      //ES7 
//two new functions introduced in 2016

'Hellooo'.includes('o');
const pets =['cat','dig','bat'];
pets.includes('cat');

const square = (x) => x**2;

square(2);

const cube = (y) => y**3;
cube(4)

//ES8  introduced in 2017 new functinos

.padStart();
//.padEnd();  just addes spaces that if we write 'turtle'.padEnd(10) output will be
// 'turtle          ' < this 
const fun = (a,b,c,d,)=>{
  console.log(a);
}
fun(1,2,3,4,)// this is just for clean syntax becous in big lists 
// we will just add , in last becous if we need to add somthing to list we would alredy had the camma.
 
Object.values
Object.entries
Object.keys

let obj = {
  username: 'Santa',
  username1: 'Rudolf',
  username2: 'Mr.Grinch'
}
// we cant iterate thought object using map ,filter, reduse but we need to itterate
// so we just use Object.keys like this

Object.keys(obj).forEach((user)=>{
  console.log(user,obj[user]);
}) // this was old way ot etterate throught objects 

Object.values(obj).forEach(values =>{
  console.log(values);
})// this will output values and keys

Object.entries(obj).map(value=>{
  return value[1] + value[0].replace('username','');
})


                                              //ES10 2019

flat()// this is a method that we can use in a arrays 
const arrays3 = [1,[2,3,4,[5]]];
arrays3.flat(2); 

const entries  = ['bob','sally',,,,,,'cindy'];
entries.flat();

flatmap();//allwas to use flat and map on array

const userEmail ='          eedytheeagle@gmail.com'
const userEmail2 = 'johnydangerous@gmail.com     '
userEmail.trimStart(); // will get rid of spases at the start of the email well not only spacses but in ower case scapses

userEmail2.trimEnd() // well get rid of the spacses at the end of the email same as abow here

userProfiles = [['commnderTom',23],['derekZlander',40],['hansel',20]]// lets say this profils are formated in wrong way we now have a 
//list but in the list dont have object its just array and it would have been nice it to each name were assign age like in Object.

const obj4 = Object.fromEntries(userProfiles)
Object.entries(obj4) // this dose oposit of formEntries

try{
 true + 'h1';
}catch{
  console.log('you messed up');
} // try a piece of code and catch errors if we see erors do somting in catch block



//JavaScript Loopings
 const basket = ['apples','oranges','grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000,
}
 for(let i = 0 ; i < basket.length ; i++){
  console.log(basket[i]);
 }

 basket.forEach(items=>{console.log(items)})


// for of loop 
// Iterating - arrays, strings

  for(itmes of detailedBasket){
    console.log(itmes);
  } // incorect way of use 
  for (item in basket){
    console.log(item);

  }//<= preferable way to use 

// for in loops we ar't iterating in objects we are 
// Enumeraiting becous objects in javascrip are enumrable becous
// we can see the properties  enumerating - objects 

for (item in basket){
  console.log(item);

} // not incorect but not preferable way to use 
for (item in detailedBasket){

  console.log(item);
} // <= correct way of use used for enumarate throught object

// we will get output even if we just enumaret throught basket becous we can bsicly imagen
// that list is a object with objects like this 
basket = {
  0: 'apples',
  1 : 'oranges',
  2: 'grapes'
}// and in every list this for in loop will output the numbers of  somthing in list 


                                            //ES2020 Featurs
// BigINt 
// NUllish colescing operatior ??
// opnional chaining operator ?.

// in ES2020 
// they added new type BigInt
// basicly the javascript has a safeMaxValues with a value of 9007199254740991 
// and if we want to add a number to that number we might brake somthing so 
// to aviod that we add n to the end of thes number 9007199254740991n + 2n with this
// noting will brake and adding operation will go smothly and not only adding  

let will_pokemon = {
  // pickachu:{
  //   species: 'mouse Pokeman',
  //   height: 0.4,
  //   weight: 6,
  //   power: 'lightning'
  //   }
}
let andrei_pokeman = {
  pickachu:{
    species: 'mouse Pokeman',
    height: 0.4,
    weight: 30,
    power: 0
    }
}

// lets say we want to find a waight of a pokeamn and store it we will do it like this 
let weight = will_pokemon.pickachu.weight
console.log(weight)
// this is working but say we have a new user and he dont has same pokeman how will we see its weight
let raichu_weight = andrei_pokeman.pickachu.weight
console.log(raichu_weight)


// we will get error becous we have raichu not pickachu
let raichu_weight1 = andrei_pokeman.raichu.weight
console.log(raichu_weight1)

if (andrei_pokeman && andrei_pokeman.pickachu && andrei_pokeman.pickachu.weight){
  let weight2 = andrei_pokeman.pickachu.weight
}else{
  let weight2 = undefined
}// we will check if andre has a pichachu or not if not the end will be undefind
// and good in a Opnional chaining operator is that the and operations
// and the chacking thats done in if statment is too much we can simplify it 
// With Optinal Chaning Operation

let weight3 = andrei_pokeman?.pickachu?.power
// by doing this we willl see if andrei_pokeman is object if it has pickachuo object and in this
// object if he has weight if it has it will print it if dont it will print undefind



//lets say we have property for a object that we dont know most 
// time we will use or operator like this 
// but in this situation if we have power but theres nothing in it like this power : '' it will print no power 
// so now we dont know should we add a power operator or not becous it might be added alerdy its just might be empty
// this is hapening becous an operation below just checks if the evaluation that we do is true or false and if its false
// it will avaluate as false and return whats in || or opereitor
// so even if we write false this will result in false and the end would have been no power as well 

let power = andrei_pokeman?.pickachu?.power || 'no Power'

// so the answer is ?? <- this operation it checks it its null or undefind

let power1 = andrei_pokeman?.pickachu?.power ?? 'no Power'


                                                  // ES 2021 

//.replcaceAll(); this takes tow operators first what we want to change
// second to what we want to change it but the plus is that we can chage it in a 
// string so if we have string and we want to change a spesicic word in a string we can
// change it with .replaceAll(); operator

const str = "THis is just a good string"
str.replace('good',"best");

                                                //debugging

const flattened =[[0,1],[2,3],[4,5]].reduce((accumulator,array)=> {
  
  debugger;
  return accumulator.concat(array)

}, []);

                                // How Dose Javascript Works

// what is a program - it alocate memory amd parse and ecexute scripts
// we alsoe have Engine for example chrome has V8 -engine
// reads java and changes to machin executabme instucation 
// it consists of 2 parts Memory heap and Call stack 
// Memory heap - this is were memory is alocated
// call stack - this tells where you are in program and read cods end executes it

const a = 1 // this is alocating memory now we use memory heap
console.log('1');
console.log('2');
console.log('3');

const one = () => {
  const two = () => {
    console.log('4');
  }
  two();
}
// CALL STACK the order of execution and the program that reads code 
//and stops execution  after it ends

// single threaded means it has one Call Stack and it means it can do one
// program execution at a time 

// Recursion function that its self
function foo (){
  foo();

}

foo();// this will result in stack owerflow 
// this lenguage is nonblocking

console.log('1');
setTimeout(()=>{
  console.log('2');
},200)
console.log('3');

// JavaScript Run Time Enviroment


let namess = () =>{
    const name = "demetre"
    
    let greetName = () => {
      console.log("hello" + name);
      var secounname = "kakhabrishvili"
      
    }
    console.log(secounname);

}


                                       // ES9 
// object separate operator
const animals ={
  tiger:23,
  lion:5,
  monket :2, 
  bird:40
}
const arrays = [1,2,3,4,5]
function sum(a,b,c,d,e){
  return a+b+c+d+e
}


function objectSpread(p1,p2,p3){
  console.log(p1)
  console.log(p2)
  console.log(p3)
}

const {tiger, lion, ...rest} = animals;

// finally it will do somthing when Promise will work and it will
// work despite wheater somthing resolves or rejects and output somthing that we pass in
