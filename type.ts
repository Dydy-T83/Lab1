let myString:string = "Hello";
console.log(myString);

let list:Array<number>=[1,2,3];
console.log(list[0]);

//any
let notSure: any = 4;
notSure="maybe a strimg instead";
console.log("Value is a string: "+notSure+".");
notSure = false;
console.log("Noz value is a bolean: "+notSure+".");