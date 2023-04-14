interface NewUser {
  id: number;
  name: string;
  getName(): string;
}

const vineeth: NewUser = {
  id: 1001,
  name: "Vineeth",
  getName() {
    return this.name;
  },
};

console.log(vineeth);
