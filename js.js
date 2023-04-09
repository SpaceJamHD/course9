// Функции

// function sayHello(firstName = "Default", lastName = "Default") {
//     console.log(firstName, lastName);
//     console.log("Hello World");
//     return `Hello ${firstName} ${lastName}`
// }

// let res = sayHello("Denis", "Abocha");
// let res2 = sayHello("Denis", "Abocha") + 'I';
// let res3 = sayHello();

// console.log(res3);

// function foo() {
//     x = 20;
//     console.log(x)
//     return x;
// }

// foo();

// console.log(x);

// const user = {
// name: 'Denis',
// age: 30
// };

// function getObj(obj) {
//     obj.name = "Den";
// }

// getObj(user);
// console.log(user);


// const square = function (x) {
//     return x * x;
// };

// (function (msg) {
//     console.log(msg)
// })('Hello');



//                  МАССИВЫ

const numArr = [2, 5, 85, 12, 56];

let value;

value = numArr.length;
numArr.length = 0;
numArr.length = 100;

value = Array.isArray(numArr);
value = numArr[2];
numArr[2] = 12;

value = numArr.indexOf(32);

value = numArr.push(100); // конец
value = numArr.pop(); // Удаление конец
value = numArr.unshift(444); // доб вначале
value = numArr.shift(); // удаляет вначале
value = numArr.slice(0, 2); // возвр то что взял 
value = numArr.splice(1, 2, 'one', "two"); // удаляет какой-то элем из массива и может добавить
value = numArr.reverse(); // переворачивает массив
value = numArr.concat(1, 2); //  копирует тек массив и добавляет что-то
value = numArr.join(" "); // Из массива строку
value = "hello world".split(""); // Из строки массив
console.log(value, numArr);

console.log(value, numArr);