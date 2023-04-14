// console.log("Helllo from script.ts");

// function identity<Type>(arg: Type): Type {
//   return arg;
// }

// let myIdentity: <Type>(arg: Type) => Type = identity;

// console.log(myIdentity("Hello"));

// function identity<Type>(arg: Type): Type {
//     return arg;
// }

// interface genericIdentityFn<Type> { (arg: Type): Type }

// // let myIdentity: <Type>(arg: Type) => Type = identity;

// let myIdentity: { <Type>(arg: Type): Type } = identity;

// console.log(myIdentity("Hello"));

// class GenericNumber<NumType> {
//     zeroValue!: NumType;
//     add!: (x: NumType, y: NumType) => NumType;

//     getData() {
//         console.log(this.zeroValue)
//     }
// }

// let myGenericNumber = new GenericNumber<number>();
// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function (x, y) {
//     console.log(x, y)
//     return x + y;
// };

// myGenericNumber.getData();

// function identity<T>(val: T): T {
//   console.log((typeof val).constructor);
//   console.log(val);
//   return val;
// }

// type Human1 = {
//   name: string;
//   gender: string;
//   height: number;
// };

// interface Human2 {
//   name: string;
//   gender: string;
//   height: number;
// }

// class Human3 {
//   name!: string;
//   gender!: string;
//   height!: number;
// }

// const Vineeth: Partial<Human2> = {
//   name: "Vineeth",
//   gender: "Male",
//   height: 5.11,
// };

// const Puneeth: Human2 = {
//   name: "Puneeth",
//   gender: "Male",
//   height: 6.2,
// };

// identity<Human1>(Vineeth as Human1);
// identity<Human1>(Puneeth);

// function getHumansData<T>(humans: T[]): T {
//   return humans[0];
// }

// const getAllHumansData = <T>(humans: T[]): T => humans[0];

interface Human {
  name: string;
  gender: string;
  height: number;
}

interface SuperHuman<Human> {
  data: Human;
  strength: string[];
  weakness: string;
  // (): SuperHuman,
  getStrength(): string[];
  getWeakness: () => string;
  get size(): number;
  set size(val: number | string);
}

// interface SuperHuman<Human extends { country: string }> {
//   data: Human;
// }

const Puneeth: SuperHuman<Human> = {
  data: {
    name: "Puneeth",
    gender: "Male",
    height: 6.2,
  },
  strength: ["Laser Sight", "Dimond Body"],
  weakness: "Cryptonite",
  getStrength() {
    return this.strength;
  },
  getWeakness() {
    return this.weakness;
  },
  get size() {
    return this.data.height;
  },
  set size(val: number | string) {
    if (typeof val === "number") {
      this.data.height = val;
    } else {
      this.data.height = Number(val);
    }
  }
};

// const Vineeth: SuperHuman<> = {
//   data: {
//     name: "Vineeth",
//     gender: "Male",
//     height: 6.6,
//   },
//   strength: ["Laser Sight", "Dimond Body"],
//   weakness: "Cryptonite",
//   getStrength() {
//     return this.strength;
//   },
//   getWeakness() {
//     return this.weakness;
//   },
// };

// type Human = {
//     name: string;
//     gender: string;
//     height: number;
// }

// const Vineeth: Human = {
//     name: "Vineeth",
//     gender: "Male",
//     height: 5.11,
// };

// const Puneeth: Human = {
//     name: "Puneeth",
//     gender: "Male",
//     height: 6.2,
// };

// function getHumansData<T>(humans: T[]): T {
//     console.log(...humans);
//     return humans[0];
// }

// getHumansData([Vineeth, Puneeth]);

// interface SuperHuman extends Human {
//   strength: string[];
//   weakness: string;
//   (): SuperHuman;
//   getStrength(): string[];
//   getWeakness: () => string;
// }

// const Vineeth: SuperHuman = {
//   name: "Vineeth",
//   gender: "Male",
//   height: 5.11,
//   strength: ["Laser Sight", "Dimond Body"],
//   weakness: "Cryptonite",
//   getStrength() {
//     return this.strength;
//   },
//   getWeakness() {
//     return this.weakness;
//   },
// };

// console.log(Vineeth.getStrength());
// console.log(Vineeth.getWeakness());
