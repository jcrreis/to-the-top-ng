import { Component, OnInit } from '@angular/core';
import {  GameMinusIdWithImage } from '../game';
import { GamesService } from '../games.service';
import { FileInput } from 'ngx-material-file-input';

@Component({
  selector: 'app-creategameform',
  templateUrl: './creategameform.component.html',
  styleUrls: ['./creategameform.component.scss']
})
export class CreategameformComponent implements OnInit {

  game: GameMinusIdWithImage 
  gameImage: File = null
  constructor(private gamesService: GamesService ) {}

  ngOnInit() {
    this.game = {
      name: "",
      price: null,
      description: "",
      storeLink: "",
      trailerUrl: "",
      upvotes: 0,
      image: null,
    }
  }
  onFileSelected(event){
    this.gameImage = <File>event.target.files[0]
  }

  addGame(): void{
    const fd =  new FormData()
    fd.append('name',this.game.name)
    fd.append('price',this.game.price.toString())
    fd.append('description',this.game.description)
    fd.append('storeLink',this.game.storeLink)
    fd.append('trailerUrl',this.game.trailerUrl)
    fd.append('image', this.gameImage , this.gameImage.name);

    this.gamesService.addGame(fd)
  }

}
