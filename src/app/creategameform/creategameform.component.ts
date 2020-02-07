import { Component, OnInit } from '@angular/core';
import {  GameMinusIdWithImage } from '../game';
import { GamesService } from '../games.service';
import { iState } from '../store/mystore.reducer';
import { Store } from '@ngrx/store';
import { addToGameList, addToCreatedGameList } from '../store/mystore.actions';
import { Router } from '@angular/router';
import { ErrorMessage } from 'src/utils/interfaces';
import { compressImage } from '../../utils/resizeBase64img'
@Component({
  selector: 'app-creategameform',
  templateUrl: './creategameform.component.html',
  styleUrls: ['./creategameform.component.scss']
})
export class CreategameformComponent implements OnInit {

  game: GameMinusIdWithImage 
  gameImage: File = null
  previewUrl:any = null;
  shouldBeDisabled: boolean = false;

  nameError: ErrorMessage = {
    active: false,
    message: ""
  }
  priceError: ErrorMessage = {
    active: false,
    message: ""
  }
  descriptionError: ErrorMessage ={
    active: false,
    message: ""
  }
  storeLinkError: ErrorMessage = {
    active: false,
    message: ""
  }
  trailerUrlError: ErrorMessage = {
    active: false,
    message: ""
  }
  imageError: ErrorMessage = {
    active: false,
    message: ""
  }

  imageSizeError: ErrorMessage = {
    active: false,
    message: "Your image can't exceed 4MB"
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
    let img = <File>event.target.files[0]

    if(img.size <= 4000000){ 
    this.gameImage = <File>event.target.files[0]
    this.preview()
    }
    else{
      this.imageSizeError.active = true 
    }
  }

  preview(){
    var mimeType = this.gameImage.type;
    if(mimeType.match(/image\/*/) == null)
      return;
    var reader = new FileReader();
    reader.readAsDataURL(this.gameImage);
    reader.onload = (_event) => {
      this.previewUrl = reader.result;
      compressImage(this.previewUrl,450,337.5).then( imgR => {
        this.previewUrl = imgR
      })
    }
  }

  addGame(): void{
    this.shouldBeDisabled = true;
    const fd =  new FormData()

    if(this.game.price == undefined)
      this.shouldBeDisabled = false;

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
      debugger
      if(error.response.data.name !== undefined){
        this.nameError = {
          active: true,
          message: "Name field cannot be blank"
        }
      }
      if(error.response.data.price !== undefined){
        this.priceError = {
          active: true,
          message: error.response.data.price
        }
      }
      if(error.response.data.description !== undefined){
        this.descriptionError = {
          active:true,
          message: error.response.data.description
        }
      }
      if(error.response.data.storeLink !== undefined){
        this.storeLinkError = {
          active: true,
          message: error.response.data.storeLink
        }
      }
      if(error.response.data.trailerUrl !== undefined){
        this.trailerUrlError = {
          active: true,
          message: error.response.data.trailerUrl
        }
      }
      if(error.response.data.image !== undefined){
        this.imageError = {
          active: true,
          message: error.response.data.image
        }
      }
      this.shouldBeDisabled = false;
    })
  }
}
