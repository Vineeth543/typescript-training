// const getUserInput = (): string | number => {
//   return 1;
//   return "Hi";
// };

// const userInput: string | number = getUserInput();

// if (typeof userInput === "string") {
//   console.log("String");
// } else if (typeof userInput === "number") {
//   console.log("Number");
// }

// const getUserInput = (): number | number[] => {
//   return 1;
//   return [1, 2, 3];
// };

// const userInput: number | number[] = getUserInput();

// if (userInput instanceof Array) {
//   console.log("Number[]");
// }

const getUserInput = (): number | string => {
  return 1;
  return "Text";
};

const userInput: number | string = getUserInput();

const userInputLength =
  (typeof userInput === "string" && userInput.length) || userInput;

console.log(userInputLength);

export {};
