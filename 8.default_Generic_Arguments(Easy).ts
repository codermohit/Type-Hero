type Method = "GET" | "POST";
type ApiRequest<T, Method = "GET"> = {
  data: T;
  method: Method;
};

type TSConfig<T = { strict: true }> = {
  [K in keyof T]: T[K];
};
