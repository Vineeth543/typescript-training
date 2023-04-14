class Human {
  private name: string;
  gender: string;
  height: number;
  weight: number;
  getName(): string {
    return this.name;
  }
  setName(name: string): void {
    this.name = name;
  }
  constructor() {
    this.name = "Vineeth";
    this.gender = "Male";
    this.height = 5.8;
    this.weight = 70;
  }
}

console.log(new Human());

class User extends Human {
  newName: string;
  newGender: string;
  constructor() {
    super();
    this.newName = "New " + new Human().getName();
    this.newGender = "New " + new Human().gender;
  }
}

console.log(new User());
