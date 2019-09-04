// let o = { name: "zzz", obj: {
//     txt: "111"
// } }
// let {...a} = o
// o.name = "bbb"
// o.obj.txt = "222"
// console.log(a, o)


// Object.defineProperty()

// let arr = [1,2,3]

// // arr = [...arr, 4]

// console.log(arr)

// let [a, a1, a2, ...b] = arr
// console.log(b, a)

// let obj = {
//     a: "111",
//     c: {
//         d: "333"
//     }
// }
// let obj2 = {
//     ...obj,
//     b: "222"
// }
// obj.c.d = "555"
// console.log(obj2)

let [a, b, [c]] = [1,2,3,4]
console.log(a, b, c)