class A {
    constructor(name) {
        this.name = name
    }
}

class B extends A {
    constructor (name1) {
        super(name1)
    }
}

let b= new B("我是name")
console.log(b.name, b.state.a)