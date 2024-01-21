//general purpose mappings of one type to another

// Mapping for this object
type GroceryList = {
  [k: string]: number;
};

type InappropriateActionBySituation = {
  [k: string]: string[];
};

type CharactersById = {
  [index: string]: {
    id: number;
    name: string;
    status: string;
    species: string;
  };
};

const charactersById: CharactersById = {
  1: {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
  },
  2: {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
  },
  3: {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
  },
  4: {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
  },
  5: {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
  },

  //error here , as name is not define for key unity
  unity: {
    id: 6,
    status: "Alive",
    species: "Hive Mind",
  },
};
