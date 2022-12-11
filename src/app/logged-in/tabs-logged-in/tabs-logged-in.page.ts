import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-tabs-logged-in',
  templateUrl: './tabs-logged-in.page.html',
  styleUrls: ['./tabs-logged-in.page.scss'],
})
export class TabsLoggedInPage implements OnInit {

  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
    
  }

  logout() {
    this.auth.logout();
  }
}
