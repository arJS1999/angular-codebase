import { Component } from '@angular/core';
import { PostService } from '../../service/Api/post.service';
import { SharedComponent } from 'src/app/service/shared/shared.component';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/Helper/helper';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.css'],
})
export class UserSigninComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  constructor(
    private postService: PostService,
    private route: Router,
    private SharedService: SharedComponent,
    private helperService: HelperService
  ) {}

  hide = true;
  signinForm = this.SharedService.signinForm;

  signin() {
    try{
    if (this.signinForm.invalid) {
      this.helperService.commonToast()
      return;
    }
    this.postService.signin(this.signinForm.value).subscribe((res: any) => {
      console.log(res);
      if (res.code == 200 && res.status == 'success') {
        localStorage.setItem('token', res.data);
        this.route.navigate(['user/list']);
      }
    });
  }catch(error){
    throw error
  }
}

  get email() {
    return this.signinForm.get('email');
  }

  get password() {
    return this.signinForm.get('password');
  }

  EmailError(): any {
    return this.SharedService.UserEmailError();
  }

  PasswordError(): any {
    return this.SharedService.UserPasswordError();
  }
}
