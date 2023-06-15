class Human{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    
    talk() {
        return this.name + " speaks"
    }
}

let Human1= new Human("Tony",12)
console.log(Human1.talk());

 class Man extends Human{
    talk() {
        return this.name + " speaks"
    }

 }
 let Man1= new Man("JonSnow",22)
console.log(Man1.talk());