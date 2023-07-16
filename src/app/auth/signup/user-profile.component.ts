import { Component } from '@angular/core';
import { PostService } from '../../service/Api/post.service';
import { SharedComponent } from 'src/app/service/shared/shared.component';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/service/Helper/helper';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserSignupComponent {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';
  submitted:boolean=false
  constructor(
    private postService: PostService,
    private SharedService: SharedComponent,
    private _snackBar: MatSnackBar,
    private route: Router,
    private helperService: HelperService
  ) {}

  userProfileForm = this.SharedService.userProfileForm;
  
  onSubmit() {
    try {
      this.submitted=true
      if(this.userProfileForm.invalid){
        this.helperService.commonToast()
        return
      }
      console.log(this.userProfileForm.value);
      const data: any = this.userProfileForm.value;
      const formdata = new FormData();
      formdata.append('first_name', data.name);
      formdata.append('email', data.email);
      formdata.append('password', data.password);
      formdata.append('image', data.image);
      console.log(formdata);
      this.postService.signup(formdata).subscribe((res: any) => {
        if (res.code == 200 && res.status == 'success') {
          this._snackBar.open(res.message, 'Close', {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          this.route.navigate(['']);
        }
      });
    } catch (error: any) {
      throw error;
    }
  }

  UserNameError() {
    return this.SharedService.UserNameError();
  }

  UserPasswordError() {
    return this.SharedService.UserPasswordError();
  }

  UserImageError() {
    return this.SharedService.UserImageError();
  }

  UserEmailError() {
    return this.SharedService.UserEmailError();
  }
  get name() {
    return this.userProfileForm.get('name');
  }

  get email() {
    return this.userProfileForm.get('email');
  }

  get password() {
    return this.userProfileForm.get('password');
  }

  get image() {
    return this.userProfileForm.get('image');
  }
}
