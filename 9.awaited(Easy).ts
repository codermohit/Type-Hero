// to check whether the passed in value is a Promise
// checks if PromiseLike , has then Property available on it.
type MyAwaited<T extends PromiseLike<any>> = MyAwaitedImplemented<T>;

//Recursive implementation
//Checks for T, if T represents the PromiseLike interface then infer the wrapped V generic parameter
//if it doesn't represent PromiseLike interface, return the parameter T

type MyAwaitedImplemented<T> = T extends PromiseLike<infer V>
  ? MyAwaitedImplemented<V>
  : T;
