import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { GamePageComponent } from './game-page/game-page.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  { path: 'login', component: LoginformComponent },
  { path: 'register', component: SignupformComponent },
  { path: 'games/:id', component: GamePageComponent},
  { path: 'signup', component: SignupformComponent },
  {path: 'user',component: UserAreaComponent},
  { path: '', component: MainpageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
