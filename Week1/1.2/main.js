/* Variables can be declared in three types as follows
1)Var
This was the first keyword which was introduced to define variables in function scope but later on let was introduced
Hoisting is allowed with var

2)let
This keyword is used to declare variables in block scope.
Hoisting is not allowed with let

3)const
const keyword is basically used to defind variables with const values

*/


// let firstName = "Abhinav";
// let age = "23";
// let isMarried = false;

// console.log(firstName);
// console.log(age);
// console.log(isMarried);

// if (isMarried) {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " is not married");
// }

// let answer = 0;

// for (let i = 0; i < 10; i++) {
//   answer++;
// }

// console.log(answer);


// const numbers = [21, 22, 24, 27, 29, 30];
// const count = numbers.length;

// for (let i = 0; i < count; i++) {
//   const val = numbers[i];
//   if (val % 2 == 0) {
//     console.log(val);
//   }
// }

// let users = [
//   {
//     userName: "Abhinav",
//     gender: "male",
//     metadata: {
//       age: 23,
//       city: "Bikaner"
//     }
//   },
//   {
//     userName: "Sonu",
//     gender: "male",
//     metadata: {
//       age: 22,
//       city: "Jaipur"
//     }
//   },
//   {
//     userName: "Priya",
//     gender: "female",
//     metadata: {
//       age: 24,
//       city: "Jodhpur"
//     }
//   }
// ];

// const userCount = users.length;


// for (let i = 0; i < userCount; i++) {
//   let user = users[i];
//   let userName = user["userName"];
//   let gender = user["gender"];

//   if (gender == "male") {
//     console.log(userName);
//   }
// }


function findSum(num1, num2, funcToCall) {
  const sum = num1 + num2;
  funcToCall(sum);
}

function displayResult(data) {
  console.log('Result of the sum is : ' + data);
}

function displayResultPassive(data) {
  console.log('sum of result is : ' + data);
}

let ansIsPassive = false;

if (ansIsPassive) {
  findSum(1, 2, displayResultPassive);
} else {
  findSum(1, 2, displayResult);
}

