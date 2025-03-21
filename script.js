
let a = 10;  
let b = 5;  

console.log("Summas rezultāts:", a + b);       
console.log("Starpības rezultāts:", a - b);   
console.log("Reizinājuma rezultāts:", a * b); 
console.log("Dalījuma rezultāts:", a / b);    

console.log("a pakāpē b:", Math.pow(a, b));     
console.log("Dalījuma atlikums:", a % b);       
if (a > b) {
    console.log("a ir lielāks par b");
} else if (a == b) {
    console.log("a ir vienāds ar b");
} else if (b < a) {
    console.log("b ir mazāks par a");
}
switch (true) {
    case (a > b):
        console.log("a ir lielāks par b");
        break;
    case (a == b):
        console.log("a ir vienāds ar b");
        break;
    case (b < a):
        console.log("b ir mazāks par a");
        break;
}
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

for (let i = array.length - 1; i >= 0; i--) {
    console.log(array[i]);
}