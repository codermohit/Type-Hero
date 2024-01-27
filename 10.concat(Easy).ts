//Concat takes
//two or more arrays and returns a new array with all the elements from the input arrays.
//arrays can be nested, contain differnt type of values, can be tuples(readonly arrays)
type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [
  ...T,
  ...U
];
