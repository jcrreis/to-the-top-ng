import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-activate-account',
  templateUrl: './activate-account.component.html',
  styleUrls: ['./activate-account.component.scss']
})
export class ActivateAccountComponent implements OnInit {

  
  message: string

  constructor(private route: ActivatedRoute,private loginService: LoginService) { }
  ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        this.loginService.activateAccount(params.user,params.token).subscribe( (response: any) => {
          this.message = response.data
        })
      })
  }

}
