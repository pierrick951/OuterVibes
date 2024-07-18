export type SocialeType = {
  id: string;
  element: JSX.Element;
  link: string;
}[];

export type Slidersrc = {
  id: string;
  srcSlider: string;
}[];

export type NavType = {
  id: string;
  text: string;
  link: string;
}[];

export type CardType = {
  id: string;
  ico: JSX.Element;
  text: string;
  
}[];



export type cardPricesType = {
  id: string;
  text: string;
  title: string;
  price:number;
  tabs:string[];
}[]