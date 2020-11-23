export type GamePrice = {
  discount?: number;
  price: number;
};

export type Game = {
  title: string;
  image: string;
  price: GamePrice;
};
