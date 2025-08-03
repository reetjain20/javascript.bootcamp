//reet
/*const cowsay= require("cowsay");
//console.log(cowsay.say({text : "i'm a moowww"}));
const cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm a moooodule",
    e : "$$",
    T : "U "
}));
const*/


/*const abx=55;
console.log("the value of abx is " + abx);
console.log(`the value of abx is ${abx}`);
console.log(abx);*/

/*function greet(name,age){
let message = `Hello, ${name}! you are ${age} years old`;
return message;}

//function call with parameter//
const greeting=greet("alice",18);
    console.log(greeting);*/

/*let counter =0;
while(counter<3){
    counter=counter +1;  
    console.log(counter); 
}
console.log("while loop finished");*/

/*const fruits = ["APPLE", "BANANA","MANGO"];
for(i=0 ; i<fruits.length; i++){
    const fruit = fruits[i];
    console.log(`Fruit at index ${i} is: ${fruit}`);
}*/


/*function calculatearea(length,width=1){
    return length*width;
}
// call function with two parameters
const rectanglearea=calculatearea(10,5);
console.log(`Area of a 10X5 Rectangle is : ${rectanglearea}`);

//call the functyion with only onje parametetr using defaukt

const squarearea=calculatearea(8,8);
    console.log(`area of a square with side 8 is: ${squarearea}`);*/


/*      
  // a more complex function defintion : an anonymous function assigned to a const
  const getsum = function(a,b) {
      return a+b;
  }   ;

  // calling anpnymous function.
  const sum = getsum(15,20);
  console.log(`the sum of 15 and 20 is : ${sum}`);

  //a modern arrow function (a more concise way way to define functions)
  const multiply = (x,y ) => x*y;
  console.log(`the product of 5 and 6 is: ${multiply(5,6)}`);
  function mult(x,y){
      const c=x*y;
      return c;
      }*/
/* question 1 sum
            let sum=0;
            for(i=0;i<1000;i++){
                if(i%3==0 | i%5==0)
                   sum=sum+i;
                 }
console.log(`the sum of numbers 1000 below which is divisible by 5 or 3 is: ${sum}`);*/

/* question 2 fibonacci series
let a=1;
let b=1;
let sum=0;
while(b<4000000){
    temp=b;
    b=b+a;
    a=temp;
    if(b%2===0)
        sum+=b;
}
console.log(`the sum of fibonacci series below 4000000 is ${sum}`);*/

// question 3


/*let num=600851475143
let i=2;
while(i<=num){
if(num%i===0){
    num=num/i;
}
else{
    i++;
}
}
console.log(i);*/


/* question 4
let num = 100n;
let fact = 1n;
let sum = 0n;

for (let i = 2n; i <= num; i++) {
    fact *= i;
}

while (fact > 0n) {
    let digit = fact % 10n;
    sum += digit;
    fact /= 10n;
}

console.log(Number(sum));*/


/*
let a="123"
let b=parseInt(a);
console.log(b);*/

/*let a=["1","2","3"];
b=a.join('');
console.log(b);*/


