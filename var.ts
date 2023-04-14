let myName: string = "VIneeth";
let myPhone: number = 9113937543;

let myNum: number;

myName.toUpperCase();
myPhone.toString();

console.log(myName);

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

let anotherUser: User = {
  name: "",
  email: "",
  isActive: true,
};

function createUser(user: User): User {
  return anotherUser;
}

createUser({ name: "", email: "", isActive: true });

type cardNumber = {
  cardnumber: string;
};

type cardDate = {
  carddate: Date;
};

type cardDetails = cardNumber &
  cardDate & {
    cvv: number;
  };

export {};
