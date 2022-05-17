export interface Country {
  code: string;
  name: string;
  nativeNames: { [key: string]: { official: string; common: string } };
  population: number;
  continents: string[];
  capitals: string[];
  languages: { [key: string]: string }[];
  currencies: string[];
  borders: string[];
}
