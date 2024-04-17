// Task 1: Object-Oriented Programming

// car.js

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo() {
        console.log(`Car: ${this.make} ${this.model}, Year: ${this.year}`);
    }
}

// Creating two instances of the Car class
const car1 = new Car("Toyota", "Camry", 2020);
const car2 = new Car("Honda", "Accord", 2019);

// Calling the displayInfo() method for each car instance
car1.displayInfo();
car2.displayInfo();