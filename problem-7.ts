
/* ----------Car Object and getCarAge method for calculating car's age------------ */
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  getCarAge(): number {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  }
}


const car = new Car("Honda", "Civic", 2000);
// console.log(car.getCarAge());
