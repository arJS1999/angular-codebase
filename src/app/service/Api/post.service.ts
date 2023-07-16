import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  baseURL = 'http://localhost:8088/';
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private http: HttpClient, private _snackBar: MatSnackBar) {}

  signup(data: any): Observable<any> {
    return this.http.post(this.baseURL + 'signup', data).pipe(
      catchError(async (err) =>
        this._snackBar.open(err.error.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      )
    );
  }

  signin(data: any): Observable<any> {
    return this.http.post(this.baseURL + 'signin', data).pipe(
      catchError(async (err) =>
        this._snackBar.open(err.error.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      )
    );
  }

  getUserList(): Observable<any> {
    return this.http.get(this.baseURL + 'user-list').pipe(
      catchError(async (err) =>
        this._snackBar.open(err.error.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      )
    );
  }


  getUserSelectedSkillList():Observable<any>{
    return this.http.get(this.baseURL + 'userSkillList').pipe(
      catchError(async (err) =>
        this._snackBar.open(err.error.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      )
    );
  }


  getUserSkillList():Observable<any>{
    return this.http.get(this.baseURL + 'skillList').pipe(
      catchError(async (err) =>
        this._snackBar.open(err.error.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      )
    );
  }

  addUserSkill(data:any){
    return this.http.post(this.baseURL + 'addUserSkill', data).pipe(
      catchError(async (err) =>
        this._snackBar.open(err.error.message, 'Close', {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
        })
      )
    );
  }
}
