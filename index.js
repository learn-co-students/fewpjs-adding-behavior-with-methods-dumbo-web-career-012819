// Your code here
// ===================================== C A T   C L A S S  ==========================================================//
class Cat {
    constructor (name){
        this.name = name;
    }

    speak() {
        return `${this.name} says meow!`
    }
}
// ===================================== D O G   C L A S S  ==========================================================//
class Dog {
    constructor (name){
        this.name = name;
    }
    speak(){
        return `${this.name} says woof!`
    }
}
// ===================================== B I R D   C L A S S  ========================================================//
class Bird{
    constructor (name, sex){
        this.name = name;
        this.sex = sex;
    }

    speak(){
        if (`${this.sex}` === "female"){
            return `${this.name} says squawk!`
        }
           else return `It's me! ${this.name}, the parrot!`
        }

}