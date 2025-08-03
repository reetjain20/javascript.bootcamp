/*const myObject= {
    "name":"Alice",
    "age":25,
    "isStudent":true,
    "hobbies":["reading","coding"],
    "address":{
        "city":"Newyork",
        "zipcode":"10001"}
    }
console.log(`name: ${myObject.name}`);
console.log(`age: ${myObject.age}`);
console.log(`hobbies: ${myObject.hobbies[0]}`);
console.log(`isStudent: ${myObject.isStudent}`);
console.log(`city: ${myObject.address.city}`);
console.log(`zipcode: ${myObject.address.zipcode}`);*/

/*arrays
let a=[];
for(let i=0;i<100;i++){
    a[i]=i+1;
}
for(let j=0;j<100;j++){
    a[j]=a[j]*3;
}
let b=[];
let m=0;
for(let k=0;k<100;k++){
    if(a[k]%5===0){
    b[m]=a[k];
    m++;
}
}
let sum=0;
for(let n=0;n<b.length;n++){
sum=sum+b[n];
}
console.log(sum);*/

// a is accumulator its a symbol

/*let arr=[];
for(i=1;i<=100;i++)arr.push(i);
let b=arr.map(x=>x*3).filter(x=>x%5===0).reduce((a,x)=>a+x);
console.log(b);*/
// or u could just console log the whole statement
/*map if only for modification of values whiles,
filter is used to return as conditon eg:-x=>x%5==0;
a is accumulator*/1305

//sum of positive numbers
/*let arr=[3,-4,5,-6,67];
let b= arr.filter(x=>x>0).reduce((a,x)=>a+x);
console.log(b);*/


/*users of i= users.[i]se me array access karta hu
and then .age se mein age access karta hu*/


const users=[
    { name:'Alice',age:25},
    { name:'Bob',age:30},
    { name:'Charlie',age:25},
];
let sum=0;
for(let i=0;i<3;i++){
sum= sum+ users[i].age;}
let avg=sum/3;
console.log(avg);

