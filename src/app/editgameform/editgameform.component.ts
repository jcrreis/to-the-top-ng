import { Component, OnInit, Input } from '@angular/core';
import { GameMinusId, Game } from '../game';
import { GamesService } from '../games.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { iState } from '../store/mystore.reducer';
import { getSelectedGame, getUser } from '../store/selectors';
import { Subscription } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-editgameform',
  templateUrl: './editgameform.component.html',
  styleUrls: ['./editgameform.component.scss']
})
export class EditgameformComponent implements OnInit {

  @Input() 
  game: Game

  gameSub: Subscription
  game_id: Number;
  private subscription: Subscription;
  gameImage: File = null
  previewUrl:any = null;
  userLoggedIn: User;
  userLoaded: boolean = false

  constructor(private router: Router,private route: ActivatedRoute,private gamesService : GamesService,private store : Store<iState>) { }

 

  ngOnInit() {

    this.store.select(getUser).subscribe(user => {
      this.userLoggedIn = user
      this.userLoaded = true
      })

    this.gameSub = this.store.select(getSelectedGame).subscribe(game => {
          this.game = game
          if(game.image != null)
          this.previewUrl = game.image
      })
      this.subscription = this.route.params.subscribe(event =>{
        this.game_id = event.id
        this.gamesService.getGamebyId(this.game_id)
    });
  }

  ngOnDestroy() {
    this.gameSub.unsubscribe()
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

  editGame(): void {
    const fd =  new FormData()
    fd.append('name',this.game.name)
    fd.append('price',this.game.price.toString())
    fd.append('description',this.game.description)
    fd.append('storeLink',this.game.storeLink)
    fd.append('trailerUrl',this.game.trailerUrl)
    fd.append('image', this.gameImage , this.gameImage.name);
    
    this.gamesService.updateGame(fd,this.game_id)
  }

  isOwner(): boolean { 
    return (this.userLoggedIn.id === this.game.user)
  }
}
