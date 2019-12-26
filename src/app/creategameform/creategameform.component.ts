import { Component, OnInit } from '@angular/core';
import {  GameMinusIdWithImage } from '../game';
import { GamesService } from '../games.service';
import { FileInput } from 'ngx-material-file-input';
import { iState } from '../store/mystore.reducer';
import { Store } from '@ngrx/store';
import { addToGameList, addToCreatedGameList } from '../store/mystore.actions';
import { Router } from '@angular/router';
import { ErrorMessage } from 'src/utils/interfaces';

@Component({
  selector: 'app-creategameform',
  templateUrl: './creategameform.component.html',
  styleUrls: ['./creategameform.component.scss']
})
export class CreategameformComponent implements OnInit {

  game: GameMinusIdWithImage 
  gameImage: File = null
  previewUrl:any = null;

  nameError: ErrorMessage = {
    active: false,
    message: ""
  }
  
  constructor(private gamesService: GamesService,private store: Store<iState>,private router: Router) {}

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
    this.preview()
  }

  preview(){
    var mimeType = this.gameImage.type;
    if(mimeType.match(/image\/*/) == null)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(this.gameImage);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
    }
  }

  addGame(): void{
    const fd =  new FormData()
    fd.append('name',this.game.name)
    fd.append('price',this.game.price.toString())
    fd.append('description',this.game.description)
    fd.append('storeLink',this.game.storeLink)
    fd.append('trailerUrl',this.game.trailerUrl)
    if(this.gameImage !== null) 
      fd.append('image', this.gameImage , this.gameImage.name);
    //TODO ELSE?
    this.gamesService.addGame(fd).subscribe((response) => {
      this.store.dispatch(addToGameList({game: response.data}))
      this.store.dispatch(addToCreatedGameList({game: response.data}))
      this.router.navigate(['/']);
    },
    (error) => {
      //we might dont need this because this is part of form validation?
      if(error.response.data.name !== undefined){
        this.nameError = {
          active: true,
          message: "Name field cannot be blank"
        }
      }
    })
  }

}
