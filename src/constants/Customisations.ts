export type CustomisationType =
  | "milk"
  | "sugar"
  | "strength"
  | "size"
  | "temp"
  | "flavour"
  | "dash";

export interface Customisation {
  header: CustomisationType;
  values: string[];
  img: string;
}

export type CustomisationTypeArray = { [P in CustomisationType]: string };

const customisation: Customisation[] = [
  {
    header: "milk",
    values: ["full", "skim", "soy", "almond"],
    img: "../assets/svg/coffee-cup-7.svg"
  },
  {
    header: "sugar",
    values: ["0", "1/2", "1", "2", "3"],
    img: "../assets/svg/sugar.svg"
  },
  {
    header: "strength",
    values: ["weak", "regular", "double", "decaf"],
    img: "../assets/svg/coffee-cup-7.svg"
  },
  {
    header: "size",
    values: ["small", "regular", "large", "byo"],
    img: "../assets/svg/coffee-cup-7.svg"
  },
  {
    header: "temp",
    values: ["normal", "warm", "hot"],
    img: "../assets/svg/coffee-cup-7.svg"
  },
  {
    header: "flavour",
    values: ["none", "honey", "caramel"],
    img: "../assets/svg/coffee-cup-7.svg"
  },
  {
    header: "dash",
    values: ["none", "water", "cream"],
    img: "../assets/svg/coffee-cup-7.svg"
  }
];

export default customisation;
