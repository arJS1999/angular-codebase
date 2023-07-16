import { Injectable } from '@angular/core';
import {  CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HelperService } from '../service/Helper/helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private route: Router, private helperService: HelperService) {}

  canActivate() {
    if (this.helperService.loggedIn()) {
      return true;
    } else {
      this.route.navigate(['']);
      return false;
    }
  }
  
}
