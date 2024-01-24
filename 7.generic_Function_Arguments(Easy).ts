//identity function : returns what is passed without any changes
const identity = <T>(arg: T) => arg;

//map function with type info
const mapArray = <T, U>(arr: T[], fn: (val: T) => U) => arr.map(fn);
