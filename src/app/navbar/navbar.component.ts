import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HelperService } from '../service/Helper/helper';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private route: Router, private helperService: HelperService) {}

  logout() {
    localStorage.clear();
    this.route.navigate(['']);
  }

  getUserName() {
    const user=this.helperService.haveAccessToken();
    return user.name
  }
}
