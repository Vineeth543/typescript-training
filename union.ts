let score: number | string = 22;

score = "44";
score = 25;

type User = {
  id: number;
  name: string;
};

type Admin = {
  id: number;
  userName: string;
};

let newUser: User | Admin = {
  id: 1001,
  name: "Vineeth",
};

newUser = {
  id: 1002,
  userName: "Avenger",
};

let arr1: number[] = [1, 2, 3, 4, 5];

let arr2: string[] = ["1", "2", "3", "4"];

let arr3: (number | string | boolean)[] = [1, "2", 3, "4", false];

let arr4: (number | string | boolean | User | Admin)[] = [
  1,
  "2",
  3,
  "4",
  false,
  { id: 123, name: "Vin" },
  newUser,
];
