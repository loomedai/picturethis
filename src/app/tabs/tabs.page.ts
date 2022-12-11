import { Component } from '@angular/core';
// Import the AuthService type from the SDK
import { AuthService } from '@auth0/auth0-angular';
@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(public auth: AuthService,) { }

  ngOnInit(): void {
    
  }
  login() {
    this.auth.loginWithRedirect();
  }

}
