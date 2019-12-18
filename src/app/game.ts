export class Game{
  id: number;
  name: string;
  price: number;
  description: string;
  storeLink: string;
  trailerUrl: string;
  upvotes: number;
  user: number;
}

export class GameMinusId{
  name: string;
  price: number;
  description: string;
  storeLink: string;
  trailerUrl: string;
  upvotes: number;
}