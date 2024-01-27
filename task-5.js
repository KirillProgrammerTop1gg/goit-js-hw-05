class Car {
    static getSpecs(car) {
       console.log(`maxSpeed: ${car._maxSpeed}, speed: ${car._speed}, isOn: ${car._isOn}, distance: ${car._distance}, price: ${car._price}`);
    }

    constructor(carData) {
        this._speed = 0;
        this._price = carData.price;
        this._maxSpeed = carData.maxSpeed;
        this._isOn = false;
        this._distance = 0;
    }

    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }
    
    turnOn() {
        this._isOn = true;
    }

    turnOff() {
        this._isOn = false;
        this._speed = 0;
    }

    accelerate(value) {
        this._speed += value <= this._maxSpeed ? value : 0;
    }

    decelerate(value) {
        this._speed -= this._speed - value >= 0 ? value : 0;
    }

 /*
  * Додає в поле distance кілометраж (hours * speed),
  * але тільки в тому випадку, якщо машина заведена!
  */
    drive = (hours) => this._distance += this._isOn ? hours * this._speed : 0;
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000