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
  image: File;
}

export class GameMinusId{
  name: string;
  price: number;
  description: string;
  storeLink: string;
  trailerUrl: string;
  upvotes: number;
  image: File;
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