const myArray: number[] = [];

const myArray2: string[] = [];

const myArray3: number[][] = [];

const myArray4: Array<number> = [];

const myArray5: Array<Array<number>> = [];

type User = {
  name: string;
  isActive: boolean;
  features: string[];
};

const Person1: User = {
  name: "No name",
  isActive: true,
  features: ["height: 2.4"],
};

let allUser: User[] = [];

allUser = [
  {
    name: "No name",
    isActive: true,
    features: ["height: 2.4"],
  },
  {
    name: "No name",
    isActive: true,
    features: ["height: 2.4"],
  },
];





export {};
