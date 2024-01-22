/**
 * Typescript constraints
 * In challenge 4.generic_Type_Arguments.ts , any type may be passed into 'type Grocery<>'
 * To use constraints , use 'extends' keyword
 */

//AllowString will allow only string type
type AllowString<T extends string> = T;
//AllowNumber will allow only number type
type AllowNumber<T extends number> = T;

type CreateLogger<T extends (a: AllowNumber<number>) => void> = {
  log: T;
  exit: () => void;
};

//implementing the type
const logger: CreateLogger<(a: number) => void> = {
  log: (num) => {
    console.log(num);
  },
  exit: () => {
    console.log("Exiting...");
  },
};
