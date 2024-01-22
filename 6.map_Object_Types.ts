type MoviesByGenre = {
  action: "Die Hard";
  comedy: "Groundhog Day";
  sciFi: "Blade Runner";
  fantasy: "The Lord of the Rings: The Fellowship of the Ring";
  drama: "The Shawshank Redemption";
  horror: "The Shining";
  romance: "Titanic";
  animation: "Toy Story";
  thriller: "The Silence of the Lambs";
};

//[K in keyof T], K is key here, it iterates over the keys of type T
type MovieInfoByGenre<T> = {
  [K in keyof MoviesByGenre]: boolean;
};

type Example = MovieInfoByGenre<MoviesByGenre>;
/**
type Example = {
    action: boolean;
    comedy: boolean;
    sciFi: boolean;
    fantasy: boolean;
    drama: boolean;
    horror: boolean;
    romance: boolean;
    animation: boolean;
    thriller: boolean;
}
 */

//Main Solution
type AnotherMovieInfoByGenre<T> = {
  [K in keyof T]: {
    name: string;
    year: number;
    director: string;
  };
};

type MovieByGenre = AnotherMovieInfoByGenre<MoviesByGenre>;
/**
type MovieByGenre = {
    action: {
        name: string;
        year: number;
        director: string;
    };
    comedy: {
        name: string;
        year: number;
        director: string;
    };
    sciFi: {
        name: string;
        year: number;
        director: string;
    };
    ...
  }
 */
