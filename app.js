//part one

class Vehicle {
    constructor(year, make, model) {
        for (let value of [year, make, model]) {
            if (value === undefined) {
                throw new Error('Missing properties')
            }
        }
        this.year = year;
        this.make = make;
        this.model = model;
    }
    toString() {
        return `I drive a ${this.year} ${this.make} ${this.model}.`;
    }
    honk() {
        return "beep";
    }
}

//part two

class Car extends Vehicle {
    constructor(year, make, model) {
        super(year, make, model);
        this.numWheels = 4;
    }
}

//part three

class Motorcycle extends Vehicle {
    constructor(year, make, model) {
        super(year, make, model);
        this.numWheels = 2;
    }
    revEngine() {
        return "vroom";
    }
}

//part four

class Garage {
    constructor(capacity) {
      this.vehicles = [];
      this.capacity = capacity;
    }

add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return "Only vehicles are allowed in here!";
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return "Vehicle added!";
  }
}
