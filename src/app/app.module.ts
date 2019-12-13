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


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    GameslistComponent,
    GamePageComponent
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
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
