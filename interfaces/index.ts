// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
// import { User } from 'path/to/interfaces';

// export type User = {
//   id: number
//   name: string
// }


export type Country = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      }
    };
  };
  capital: Array<string>;
  region: string;
  population: string;
  subregion: string;
  tld: Array<string>;
  currencies: {
    [key: string]: {
      name: string;
    }
  };
  languages: {
    [key: string]: string }
  borders: Array<string>;
  ccn3: string;
};