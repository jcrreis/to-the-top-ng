import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

  
  message: string
  subscription: Subscription
  constructor(private route: ActivatedRoute,private loginService: LoginService) { }
  ngOnInit() {
    this.subscription = this.route.queryParams
      .subscribe(params => {
        this.loginService.activateAccount(params.user,params.token).pipe(first(),).subscribe( (response: any) => {
          this.message = response.data
        })
      })
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
