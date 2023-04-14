// function toHex(this: Number) {
//   return this.toString(16);
// }

// function numberToString(n: ThisParameterType<typeof toHex>) {
//   return toHex.apply(n);
// }

// for (let i = 0; i < 19; i++) {
//   console.log(i.toString(16));
// }

// for (let i = 0; i < 19; i++) {
//   console.log(toHex.apply(i));
// }

function toHex(this: Number) {
  return this.toString(16);
}

const fiveToHex: OmitThisParameter<typeof toHex> = toHex.bind(255);

console.log(fiveToHex());

