import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarHorizontalPosition,
    MatSnackBarVerticalPosition,
  } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
    horizontalPosition: MatSnackBarHorizontalPosition = 'start';
    verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private _snackBar: MatSnackBar,
  ) {}

  getToken() {
    return localStorage.getItem('token') || '';
  }

  loggedIn() {
    return localStorage.getItem('token') != null;
  }

 
  haveAccessToken() {
    let token = localStorage.getItem('token');
    if (token) {
      let extract: any = token.split('.')[1];
      let decode = atob(extract);
      let tokendata = JSON.parse(decode);
      return tokendata;
    }
  }

  commonToast(){
  return  this._snackBar.open('Please fill all the field', 'Close', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
  }

 
}
