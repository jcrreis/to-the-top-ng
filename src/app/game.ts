import { FileInput } from 'ngx-material-file-input';

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

export class GameMinusIdWithImage{
  name: string;
  price: number;
  description: string;
  storeLink: string;
  trailerUrl: string;
  upvotes: number;
  image: File;
}