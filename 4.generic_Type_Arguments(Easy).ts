//provide a way to create flexible and reusable components by allowing types to be parameterized.

type GroceryStore<Name, City> = {
  name: Name;
  city: City;
};

type GroceryItem = unknown;

type CapreseSalad = Grocery<"Caprese Salad", 14.99, true>;

type Grocery<Name, Price, InStock> = {
  name: Name;
  price: Price;
  inStock: InStock;
};

type AvocadoToast = Grocery<"Avocado Toast", 12.32, true>;
