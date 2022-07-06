class Animal {
	constructor(type, age, name) {
		this.type = type
		this.age = age
		this.name = name
	}
}
class Dog extends Animal {
	constructor(type, age, name, voice) {
		super(type, age, name)
		this.voice = voice
	}
	sayGav() {
		console.log(`${this.voice}`)
	}
}

class Cat extends Animal {
	constructor(type, age, name, action) {
		super(type, age, name)
		this.action = action
	}
	doAction() {
		console.log(`${this.action}`)
	}
}
const dog = new Dog('dog', 3, 'alex', 'Gav')
dog.sayGav()
const cat = new Cat('cat', 3, 'barsik', 'прыгаю')
cat.doAction()

// class Tiger extends Cat {
// 	constructor(type, age, name, weight)
// 		super(type, age, name){
// 		this.weight = weight
//  }
//  sayWeight() {
// 	console.log(`${this.weight}`);
//  }
// }
// class Wolf extends Dog {
// 	constructor(type, age, name, weight)
// 	super(type, age, name){
// 		this.weight = weight
//  }
//  sayWeight () {
// 	console.log(`${this.weight}`);
//  }
// }

// const tiger = new Tiger('cat', 6, 'bars', '100kg')
// tiger.sayWeight()
// const wolf = new Wolf('dog', 4, 'maks', '50kg')
// wolf.sayWeight()

// простые задачи
class Worker {
	constructor(name, surname, rate, days) {
		this.name = name
		this.surname = surname
		this.rate = rate
		this.days = days
	}
	getSalary() {
		console.log(`${this.rate * this.days}`)
	}
}
const worker = new Worker('Иван', 'Иванов', 10, 31)
console.log(worker.name) //выведет 'Иван'
console.log(worker.surname) //выведет 'Иванов'
console.log(worker.rate) //выведет 10
console.log(worker.days) //выведет 31
console.log(worker.getSalary()) //выведет 310 - то есть 10*31
// остальное не смог
