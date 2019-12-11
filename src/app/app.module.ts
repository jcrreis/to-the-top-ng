import { BrowserModule } from '@angular/platform-browser';
import { NgModule,Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';


import { HttpClientModule,HttpClientXsrfModule,HttpInterceptor,HttpRequest,HttpHandler,HttpEvent, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { SignupformComponent } from './signupform/signupform.component';
import { GameslistComponent } from './gameslist/gameslist.component';


@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {
    
    intercept(request:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>> {
     
       const clonedRequest =
            request.clone(
                {withCredentials: true}
            );
        
        return next.handle(clonedRequest);
           
    }
}

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
    HttpClientModule,
    FormsModule,
    HttpClientXsrfModule.withOptions({
      cookieName: 'XSRF-TOKEN',
      headerName: 'X-XSRF-TOKEN',})
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
