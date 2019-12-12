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
import { myStoreReducer } from './store/mystore.reducer'


@NgModule({
  declarations: [
    AppComponent,
    LoginformComponent,
    SignupformComponent,
    GameslistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    StoreModule.forRoot({myStore: myStoreReducer})  
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
