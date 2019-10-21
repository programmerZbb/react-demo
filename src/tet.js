// class A {
//     constructor(name) {
//         this.name = name
//     }
// }

// class B extends A {
//     constructor (name1) {
//         super(name1)
//     }
// }

// let b= new B("我是name")
// console.log(b.name, b.state.a)

// new Promise((res, rej) => { 
//     throw "新的错误"
//     // throw new Error("我是错误")
//     res(111) 
//     // setTimeout(() => { console.log(222) }, 0) 
// }).then(res => {
//     console.log(res)
// }, (err) => {
//     console.log(err, "在这")
//     return err
// }).then(res => {
//     console.log(res, '2')
// }, (err) => {
//     console.log(err, "在这2")
//     return err
// }).catch(err => {
//     console.log("catch 里面的错误")
// })

class A {
    constructor() {
        this.fn = () => {
            console.log("我是挂载自身的方法")
        }
    }
    fn2() {
        console.log("fn2")
    }
}

let a = new A()

console.log(a.fn2())