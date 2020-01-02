import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import { GamePageComponent } from './game-page/game-page.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {EditgameformComponent} from './editgameform/editgameform.component'
import {CreategameformComponent} from './creategameform/creategameform.component'
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordConfirmationComponent } from './reset-password-confirmation/reset-password-confirmation.component';
import { ActivateAccountComponent } from './activate-account/activate-account.component';

const routes: Routes = [
  { path: 'login', component: LoginformComponent },
  { path: 'register', component: SignupformComponent },
  { path: 'games/:id', component: GamePageComponent},
  { path: 'signup', component: SignupformComponent },
  { path: 'user',component: UserAreaComponent },
  { path: 'edit/:id',component: EditgameformComponent },
  { path: 'create',component: CreategameformComponent},
  { path: 'changepassword', component: ChangePasswordFormComponent},
  { path: 'resetpassword' ,component: ResetPasswordComponent},
  { path: 'resetpassword/:str/:str' , component: ResetPasswordConfirmationComponent},
  { path: '', component: MainpageComponent },
  { path: 'activate', component: ActivateAccountComponent}

];
///id:str/token:str'
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
