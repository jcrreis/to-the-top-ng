import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { GameslistComponent } from './gameslist/gameslist.component';
import {StoreModule} from '@ngrx/store'
import { myStoreReducer, reducers } from './store/mystore.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { GamePageComponent } from './game-page/game-page.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {MatTabsModule} from '@angular/material/tabs'; 
import { HeaderComponent } from './header/header.component';
import { UpvoteBtnComponent } from './upvote-btn/upvote-btn.component';
import { UserAreaComponent } from './user-area/user-area.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {MatSelectModule} from '@angular/material/select';
import { OrderModule } from 'ngx-order-pipe';
import { EditgameformComponent } from './editgameform/editgameform.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CreategameformComponent } from './creategameform/creategameform.component';
import { MatFileUploadModule } from 'angular-material-fileupload';
import { MaterialFileInputModule, FileInputConfig, NGX_MAT_FILE_INPUT_CONFIG } from 'ngx-material-file-input';
import { ReactiveFormsModule } from '@angular/forms'; 



export const config: FileInputConfig = {
  sizeUnit: 'Octet'
};

import { UserinfoComponent } from './userinfo/userinfo.component';
import { ChangePasswordFormComponent } from './change-password-form/change-password-form.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordConfirmationComponent } from './reset-password-confirmation/reset-password-confirmation.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    GameslistComponent,
    GamePageComponent,
    HeaderComponent,
    UpvoteBtnComponent,
    UserAreaComponent,
    MainpageComponent,
    EditgameformComponent,
    CreategameformComponent,
    UserinfoComponent,
    ChangePasswordFormComponent,
    ResetPasswordComponent,
    ResetPasswordConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,    
    MatInputModule,
    MatTabsModule,
    MatSelectModule,
    OrderModule,
    Ng2SearchPipeModule,
    MatFileUploadModule,
    MaterialFileInputModule,
    ReactiveFormsModule,
  ],
  // add with module injection
providers: [{ provide: NGX_MAT_FILE_INPUT_CONFIG, useValue: config }],
  bootstrap: [AppComponent]
})
export class AppModule { }
