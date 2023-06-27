// const arr = [2, 3, 4, 5, 6, 7, 8, 9];

// function binaryserach(l, h, key) {
//   if (l <= h) {
//     let mid = Math.floor((l + h) / 2);
//     if (key == arr[mid]) {
//       return mid;
//     } else if (key < arr[mid]) {
//       return binaryserach(l, mid - 1, key);
//     } else {
//       return binaryserach(mid + 1, h, key);
//     }
//   }
//   return false;
// }

// const res = binaryserach(0, 7, 6);
// console.log(res);

// const objectA = {
//   a: 12,
//   b: {
//     c: 20,
//   },
// };

// const objectB = {
//   ...objectA,
// };

// console.log(objectA == objectB);

// objectB.b.c = 10;
// console.log(objectA.b.c);

// const a = {
//   q: "he",
// };
// const b = {
//   q: "he",
// };

// console.log(a == b);

// const obj = {
//   0: true,
// };

// const mp = new Map([
//   [5, "Deepak"],
//   ["name", "kumar"],
//   [true, "helo"],
// ]);

// console.log(obj);

// function fun() {
//   let input = document.querySelectorAll("#hello");
//   console.log(input[0].innerText);
//   // let text;
//   // if (input < 1 || input > 10) {
//   //   text = "invalid number!";
//   // } else {
//   //   text = "valid number !";
//   // }

//   // document.getElementById("p").innerHTML = text;
// }

// const obj = {
//   name: "Deepak",
//   age: 24,
//   objA: {
//     n: "komal",
//   },
// };

// const objB = structuredClone(obj);

// objB.objA.n = "akshit";

// console.log(obj.objA.n);

// const obj = {
//   a: "Hi",
//   b: ["Deepak", "Akshit", "Gurjeet", "Aman"],
//   display: function () {
//     this.b.forEach(function (i) {
//       console.log(this.a, i);
//     });
//   },
// };

// obj.display();

// function A() {
//   let name = "Deepak";
//   function B() {
//     console.log("Hi" + name);
//   }
//   name = "Akshit";
//   return B;
// }

// const res = A();
// res();
