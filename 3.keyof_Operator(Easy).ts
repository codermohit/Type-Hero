// keyof operator used to get the keys of a type
// if type not available to start with use typeof to get the type

const casettesByArtist = {
  "Alanis Morissette": 2,
  "Mariah Carey": 8,
  Nirvana: 3,
  Oasis: 2,
  Radiohead: 3,
  "No Doubt": 3,
  "Backstreet Boys": 3,
  "Spice Girls": 2,
  "Green Day": 2,
  "Pearl Jam": 5,
  Metallica: 5,
  "Guns N' Roses": 2,
  U2: 3,
  Aerosmith: 4,
  "R.E.M.": 4,
  Blur: 3,
  "The Smashing Pumpkins": 5,
  "Britney Spears": 3,
  "Whitney Houston": 3,
};

/**
type CasettesByArtist = typeof casettesByArtist;
type Artists = keyof CasettesByArtist //gives a union of all the keys
*/

type Artists = keyof typeof casettesByArtist;

const getCasetteCount = (artist: Artists) => {
  return casettesByArtist[artist];
};

getCasetteCount("Nirvana"); //no-error
getCasetteCount("Michael Jackson"); //error
